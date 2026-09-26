import { useRef } from 'react'

// Горизонтальная лента с кнопками "‹ ›" по бокам — переиспользуется для
// партнёров и галереи достижений на главной странице.
export default function Carousel({ children, prevLabel = 'Previous', nextLabel = 'Next' }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' })
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
        className="flex flex-1 gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
