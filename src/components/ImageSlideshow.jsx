import { useState } from 'react'

// Слайдер "одна большая картинка за раз" со стрелками (тот же стиль, что
// в Carousel.jsx) и точками-индикаторами снизу — используется для галереи
// "Наши достижения" на главной странице.
export default function ImageSlideshow({ images, prevLabel = 'Previous', nextLabel = 'Next' }) {
  const [index, setIndex] = useState(0)
  const len = images.length

  const prev = () => setIndex((i) => (i - 1 + len) % len)
  const next = () => setIndex((i) => (i + 1) % len)

  if (len === 0) return null

  return (
    <div>
      <div className="flex items-center gap-3">
        <button
          onClick={prev}
          aria-label={prevLabel}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-100 text-brand transition hover:bg-brand-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex-1 overflow-hidden">
          <img
            src={images[index]}
            alt=""
            loading="lazy"
            className="mx-auto max-h-[560px] w-auto max-w-full object-contain shadow-card"
          />
        </div>

        <button
          onClick={next}
          aria-label={nextLabel}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-100 text-brand transition hover:bg-brand-50"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {len > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-brand' : 'w-4 bg-brand-100'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
