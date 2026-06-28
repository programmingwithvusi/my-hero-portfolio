import { useEffect } from 'react'

/**
 * Reusable hook to fade elements in on scroll
 * @param selector CSS selector string (e.g. ".skill, .stat, .project-card")
 * @param threshold IntersectionObserver threshold (default 0.2)
 */
export const useFadeInOnScroll = (selector: string, threshold: number = 0.2) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [selector, threshold])
}
