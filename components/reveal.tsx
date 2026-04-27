"use client"

import { useEffect, useRef } from "react"

export function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode
  className?: string
  delayMs?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const target = entry.target as HTMLElement
          if (delayMs > 0) target.style.animationDelay = `${delayMs}ms`
          target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delayMs])

  return (
    <div ref={ref} className={`ip-reveal ${className}`}>
      {children}
    </div>
  )
}

