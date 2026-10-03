import { useEffect, useState, useRef } from 'react'

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])
  const observerRef = useRef(null)

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    elements.forEach(el => observerRef.current.observe(el))

    return () => observerRef.current?.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return activeId
}
