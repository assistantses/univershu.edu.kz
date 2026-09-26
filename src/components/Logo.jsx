import { brand } from '../brand.js'

export default function Logo({ className = '' }) {
  return (
    <img
      src="/logo.png"
      alt={brand.name}
      className={`h-9 w-auto object-contain ${className}`}
    />
  )
}
