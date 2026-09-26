import { useRef } from 'react'

// Плавная прокрутка с управляемой длительностью — нативный
// `scrollBy({ behavior: 'smooth' })` слишком быстрый и не даёт
// настроить скорость, поэтому анимируем вручную через rAF.
function animateScrollBy(el, delta, duration) {
  const start = el.scrollLeft
  const startTime = performance.now()
  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    el.scrollLeft = start + delta * easeInOutQuad(progress)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

// Горизонтальная лента с кнопками "‹ ›" по бокам — переиспользуется для
// партнёров и галереи достижений на главной странице.
export default function Carousel({ children, prevLabel = 'Previous', nextLabel = 'Next' }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    animateScrollBy(track, dir * track.clientWidth * 0.6, 1400)
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => scroll(-1)}
        aria-label={prevLabel}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-100 text-brand transition hover:bg-brand-50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="flex flex-1 gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        onClick={() => scroll(1)}
        aria-label={nextLabel}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-100 text-brand transition hover:bg-brand-50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
