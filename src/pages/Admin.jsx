import { useState, useEffect, useCallback, useRef, useMemo } from 'react'

// Панель мониторинга безопасности.
// Обращается к защищённому Spring Boot API (/api/admin/**) с HTTP Basic.
// Логин/пароль по умолчанию задаются в backend (application.properties).

const sevColor = {
  SQL_INJECTION: 'bg-red-100 text-red-700',
  XSS: 'bg-orange-100 text-orange-700',
  PATH_TRAVERSAL: 'bg-amber-100 text-amber-700',
  COMMAND_INJECTION: 'bg-rose-100 text-rose-700',
  RATE_LIMIT: 'bg-purple-100 text-purple-700',
  SCANNER: 'bg-yellow-100 text-yellow-700',
}

// В деве Vite проксирует /api на localhost:8080 (см. vite.config.js).
// В проде (фронтенд и бэкенд — отдельные Railway-сервисы) нужен полный URL бэкенда,
// заданный при сборке через переменную окружения VITE_API_URL.
const API_BASE = import.meta.env.VITE_API_URL || ''

function api(path, auth) {
  return fetch(API_BASE + path, { headers: { Authorization: 'Basic ' + auth } })
}

export default function Admin() {
  const [auth, setAuth] = useState(() => sessionStorage.getItem('aqu_admin') || '')
  const [authed, setAuthed] = useState(false)
  const [user, setUser] = useState('admin')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')

  const [stats, setStats] = useState(null)
  const [logs, setLogs] = useState([])
  const [certAccess, setCertAccess] = useState([])
  const [geo, setGeo] = useState({})
  const [filter, setFilter] = useState('all') // all | security | certificate
  const [auto, setAuto] = useState(true)
  const timer = useRef(null)

  const load = useCallback(async (a = auth) => {
    try {
      const [s, l, c, g] = await Promise.all([
        api('/api/admin/stats', a),
        api(`/api/admin/logs?type=${filter === 'certificate' ? 'all' : filter}&limit=200`, a),
        api('/api/admin/certificate-access?limit=200', a),
        api('/api/admin/geo', a),
      ])
      if (s.status === 401 || l.status === 401) { setAuthed(false); setError('Неверный логин или пароль'); return }
      setStats(await s.json())
      setLogs(await l.json())
      setCertAccess(await c.json())
      setGeo(await g.json())
      setAuthed(true)
      setError('')
    } catch (e) {
      setError('Не удаётся связаться с сервером мониторинга. Запущен ли backend на :8080?')
    }
  }, [auth, filter])

  const locationOf = (ip) => {
    const g = geo[ip]
    if (!g) return '—'
    if (g.local) return 'Локальная сеть'
    if (!g.resolved) return '…'
    return [g.city, g.country].filter(Boolean).join(', ') || '—'
  }

  // Провайдер/организация IP — часто виден хостинг или VPN, через который сканируют сайт.
  const ispOf = (ip) => {
    const g = geo[ip]
    if (!g || g.local || !g.resolved) return ''
    return g.isp || g.org || ''
  }

  // Группируем журнал по IP — один посетитель может прислать десятки запросов
  // (например, сама эта страница опрашивает /api/admin/* каждые несколько секунд),
  // поэтому в таблице показываем одну строку на IP с общим числом его запросов.
  const grouped = useMemo(() => {
    const byIp = new Map()
    for (const e of logs) {
      let g = byIp.get(e.ip)
      if (!g) {
        g = { ip: e.ip, count: 0, threats: 0, last: e }
        byIp.set(e.ip, g)
      }
      g.count += 1
      if (e.threat) g.threats += 1
      if (e.timestamp > g.last.timestamp) g.last = e
    }
    return [...byIp.values()].sort((a, b) => b.last.timestamp - a.last.timestamp)
  }, [logs])

  // То же группирование по IP, но для попыток ввода кода на /archive/{hash}/{certId} —
  // показывается на отдельной вкладке "Выбранные".
  const groupedCertAccess = useMemo(() => {
    const byIp = new Map()
    for (const e of certAccess) {
      let g = byIp.get(e.ip)
      if (!g) {
        g = { ip: e.ip, count: 0, successes: 0, last: e }
        byIp.set(e.ip, g)
      }
      g.count += 1
      if (e.success) g.successes += 1
      if (e.timestamp > g.last.timestamp) g.last = e
    }
    return [...byIp.values()].sort((a, b) => b.last.timestamp - a.last.timestamp)
  }, [certAccess])

  useEffect(() => {
    if (auth) load(auth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (authed && auto) {
      timer.current = setInterval(() => load(), 4000)
      return () => clearInterval(timer.current)
    }
  }, [authed, auto, load])

  useEffect(() => { if (authed) load() }, [filter]) // eslint-disable-line

  const doLogin = async (e) => {
    e.preventDefault()
    const a = btoa(`${user}:${pass}`)
    setAuth(a)
    sessionStorage.setItem('aqu_admin', a)
    await load(a)
  }

  const logout = () => {
    sessionStorage.removeItem('aqu_admin')
    setAuth(''); setAuthed(false); setStats(null); setLogs([]); setPass('')
  }

  if (!authed) {
    return (
      <div className="container-c flex min-h-[70vh] items-center justify-center py-12">
        <form onSubmit={doLogin} className="w-full max-w-sm rounded-2xl border border-brand-100 bg-white p-8 shadow-card">
          <h1 className="mb-1 text-xl font-extrabold text-brand">Панель мониторинга</h1>
          <p className="mb-6 text-sm text-muted">Доступ только для администратора безопасности.</p>
          {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>}
          <label className="mb-1 block text-sm font-semibold">Логин</label>
          <input value={user} onChange={(e) => setUser(e.target.value)}
                 className="mb-4 w-full rounded-lg border border-brand-100 px-4 py-2.5 outline-none focus:border-brand" />
          <label className="mb-1 block text-sm font-semibold">Пароль</label>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}
                 className="mb-6 w-full rounded-lg border border-brand-100 px-4 py-2.5 outline-none focus:border-brand" />
          <button className="btn-brand w-full">Войти</button>
          <p className="mt-4 text-center text-xs text-muted">По умолчанию: admin / changeme123</p>
        </form>
      </div>
    )
  }

  return (
    <div className="container-c py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-brand">Мониторинг безопасности</h1>
          <p className="text-sm text-muted">Журнал доступа и обнаруженные атаки в реальном времени</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-muted">
            <input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} />
            Авто-обновление
          </label>
          <button onClick={() => load()} className="btn-outline">Обновить</button>
          <button onClick={logout} className="btn-outline">Выйти</button>
        </div>
      </div>

      {/* Stats */}
      {stats && (
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { l: 'Всего запросов', v: stats.totalRequests, c: 'text-brand' },
            { l: 'Угроз обнаружено', v: stats.threats, c: 'text-red-600' },
            { l: 'Уникальных IP', v: stats.uniqueIps, c: 'text-brand' },
            { l: 'Заблокировано IP', v: stats.blockedIps, c: 'text-purple-600' },
          ].map((x) => (
            <div key={x.l} className="rounded-xl border border-brand-100 bg-white p-5 shadow-card">
              <div className={`text-3xl font-extrabold ${x.c}`}>{x.v}</div>
              <div className="mt-1 text-xs text-muted">{x.l}</div>
            </div>
          ))}
        </div>
      )}

      {/* Filter */}
      <div className="mb-4 flex gap-2">
        {[['all', 'Все запросы'], ['security', 'Только угрозы'], ['certificate', 'Выбранные']].map(([k, label]) => (
          <button key={k} onClick={() => setFilter(k)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold ${filter === k ? 'bg-brand text-white' : 'bg-brand-50 text-brand'}`}>
            {label}
          </button>
        ))}
      </div>

      {filter === 'certificate' ? (
        <>
          {/* Certificate access table */}
          <div className="overflow-x-auto rounded-xl border border-brand-100 bg-white shadow-card">
            <table className="min-w-full text-sm">
              <thead className="bg-brand-50 text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3">Последняя попытка</th>
                  <th className="px-4 py-3">IP</th>
                  <th className="px-4 py-3">Откуда</th>
                  <th className="px-4 py-3">Попыток</th>
                  <th className="px-4 py-3">Сертификат</th>
                  <th className="px-4 py-3">Код</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {groupedCertAccess.length === 0 && (
                  <tr><td colSpan="6" className="px-4 py-10 text-center text-muted">Записей нет</td></tr>
                )}
                {groupedCertAccess.map((g) => (
                  <tr key={g.ip} className={g.successes === 0 ? 'bg-red-50/40' : ''}>
                    <td className="whitespace-nowrap px-4 py-2 text-muted">{new Date(g.last.timestamp).toLocaleTimeString('ru-RU')}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-mono text-xs">{g.ip}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-xs text-muted">
                      {locationOf(g.ip)}
                      {ispOf(g.ip) && <span className="block text-[11px] text-brand-100">{ispOf(g.ip)}</span>}
                    </td>
                    <td className="px-4 py-2 font-bold text-brand">{g.count} <span className="font-normal text-muted">({g.successes} верных)</span></td>
                    <td className="px-4 py-2 font-mono text-xs">{g.last.certId}</td>
                    <td className="px-4 py-2">
                      {g.last.success ? (
                        <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">верный</span>
                      ) : (
                        <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700">неверный</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            IP-адреса, вводившие код подтверждения на странице сертификата (/archive/…).
          </p>
        </>
      ) : (
        <>
          {/* Log table */}
          <div className="overflow-x-auto rounded-xl border border-brand-100 bg-white shadow-card">
            <table className="min-w-full text-sm">
              <thead className="bg-brand-50 text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3">Последний запрос</th>
                  <th className="px-4 py-3">IP</th>
                  <th className="px-4 py-3">Откуда</th>
                  <th className="px-4 py-3">Запросов</th>
                  <th className="px-4 py-3">Метод</th>
                  <th className="px-4 py-3">Путь</th>
                  <th className="px-4 py-3">Статус</th>
                  <th className="px-4 py-3">Угроз</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {grouped.length === 0 && (
                  <tr><td colSpan="8" className="px-4 py-10 text-center text-muted">Записей нет</td></tr>
                )}
                {grouped.map((g) => (
                  <tr key={g.ip} className={g.threats > 0 ? 'bg-red-50/40' : ''}>
                    <td className="whitespace-nowrap px-4 py-2 text-muted">{new Date(g.last.timestamp).toLocaleTimeString('ru-RU')}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-mono text-xs">{g.ip}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-xs text-muted">
                      {locationOf(g.ip)}
                      {ispOf(g.ip) && <span className="block text-[11px] text-brand-100">{ispOf(g.ip)}</span>}
                    </td>
                    <td className="px-4 py-2 font-bold text-brand">{g.count}</td>
                    <td className="px-4 py-2 font-semibold">{g.last.method}</td>
                    <td className="max-w-xs truncate px-4 py-2 font-mono text-xs" title={g.last.path}>{g.last.path}</td>
                    <td className="px-4 py-2">{g.last.status}</td>
                    <td className="px-4 py-2">
                      {g.threats > 0 ? (
                        <span className={`rounded px-2 py-0.5 text-xs font-bold ${sevColor[g.last.threatType] || 'bg-red-100 text-red-700'}`}>
                          {g.threats}× {g.last.threatType}
                        </span>
                      ) : <span className="text-brand-100">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            Это защитный мониторинг вашего собственного сайта: запись IP-адресов, обнаружение
            подозрительных запросов и блокировка при превышении лимита.
          </p>
        </>
      )}
    </div>
  )
}
