import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import NewsList from './pages/NewsList.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Admin from './pages/Admin.jsx'
import ContentPage from './pages/ContentPage.jsx'
import ProgramsOverview from './pages/ProgramsOverview.jsx'
import AiSana from './pages/AiSana.jsx'
import Sdg from './pages/Sdg.jsx'
import Certificate from './pages/Certificate.jsx'
import CertificateArchive from './pages/CertificateArchive.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  useEffect(() => {
    // Статические страницы отдаёт nginx напрямую, backend их не видит —
    // без этого пинга обычный посетитель сайта вообще не попадал бы в
    // журнал панели мониторинга (там были видны только запросы к /api/*).
    fetch('/api/health').catch(() => {})
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/page/programs" element={<ProgramsOverview />} />
          <Route path="/page/aiAqu" element={<AiSana />} />
          <Route path="/page/sdg" element={<Sdg />} />
          <Route path="/page/:key" element={<ContentPage />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/archive/:hash/:certId" element={<CertificateArchive />} />
          <Route path="/univeradminpanel" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
