import './Dock.css'
import { useCallback, useEffect, useRef, useState } from 'react'

/*
 * macOS-style dock with pointer magnification, in a row or a grid.
 *
 * Item centres are measured once per pointer entry (and after a resize) rather
 * than on every move: magnification is transform-only, so the underlying layout
 * never shifts while the pointer is inside the dock.
 *
 * Distance is measured in both axes so the same falloff works for a grid, and
 * the influence range is proportional to the measured tile size, so it keeps its
 * shape as tiles scale down on smaller screens — which is what keeps
 * neighbouring tiles from growing into each other.
 */

const RANGE_RATIO = 2.0 // influence radius, in tile widths
const LABEL_RATIO = 0.6 // pointer must be this close (in tile widths) for a label
const MAX_SCALE = 1.35
const FALLBACK_TILE = 54

const smoothstep = (t) => t * t * (3 - 2 * t)

function Dock({ items, size = 'md', columns, ariaLabel }) {
  const railRef = useRef(null)
  const centersRef = useRef([])
  const tileRef = useRef(FALLBACK_TILE)
  const [pointer, setPointer] = useState(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  /*
   * Centres are stored relative to the rail, not the viewport: transforms don't
   * affect layout, so these stay valid while magnified, and they survive
   * scrolling — which matters now that the vertical axis counts.
   */
  const measure = useCallback(() => {
    const rail = railRef.current
    if (!rail) return

    const railRect = rail.getBoundingClientRect()
    const rects = Array.from(rail.children).map((el) => el.getBoundingClientRect())

    centersRef.current = rects.map((rect) => ({
      x: rect.left - railRect.left + rect.width / 2,
      y: rect.top - railRect.top + rect.height / 2,
    }))
    // At rest an item is exactly as wide as its tile.
    tileRef.current = rects[0]?.width || FALLBACK_TILE
  }, [])

  useEffect(() => {
    const onResize = () => {
      centersRef.current = []
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch') return
    if (centersRef.current.length !== items.length) measure()

    const railRect = railRef.current?.getBoundingClientRect()
    if (!railRect) return
    setPointer({ x: event.clientX - railRect.left, y: event.clientY - railRect.top })
  }

  const magnify = (index) => {
    if (pointer == null || reduceMotion) return { scale: 1, near: false }
    const center = centersRef.current[index]
    if (center == null) return { scale: 1, near: false }

    const tile = tileRef.current
    const range = tile * RANGE_RATIO
    const distance = Math.hypot(pointer.x - center.x, pointer.y - center.y)
    if (distance >= range) return { scale: 1, near: false }

    const falloff = smoothstep(1 - distance / range)
    return {
      scale: 1 + (MAX_SCALE - 1) * falloff,
      near: distance < tile * LABEL_RATIO,
    }
  }

  return (
    <div className={`dock dock-${size}${columns ? ' dock-grid' : ''}`}>
      <div
        className="dock-rail"
        ref={railRef}
        role="group"
        aria-label={ariaLabel}
        style={columns ? { '--cols': columns } : undefined}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setPointer(null)}
      >
        {items.map((item, index) => {
          const { scale, near } = magnify(index)
          const Tag = item.link ? 'a' : 'div'

          return (
            <Tag
              key={item.name}
              className={`dock-item${near ? ' is-near' : ''}`}
              style={{
                '--scale': scale,
                '--lift': `${(scale - 1) * -18}px`,
                animationDelay: `${index * 0.04}s`,
              }}
              {...(item.link
                ? { href: item.link, target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              {/* Decorative: the image alt already names the item. */}
              <span className="dock-label" aria-hidden="true">
                {item.name}
              </span>
              <span
                className={`dock-tile${item.appIcon ? ' app-icon' : ''}${
                  item.plate ? ' plate' : ''
                }`}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className={`dock-icon${item.appIcon ? ' fill' : ''}${
                    item.tone ? ` tone-${item.tone}` : ''
                  }`}
                  loading="lazy"
                  draggable="false"
                />
              </span>
              <span className="dock-caption" aria-hidden="true">
                {item.name}
              </span>
            </Tag>
          )
        })}
      </div>
    </div>
  )
}

export default Dock
