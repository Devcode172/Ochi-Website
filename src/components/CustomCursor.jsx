import React, { useEffect, useRef, useState } from "react"
import "./CustomCursor.css"

const HOVER_SELECTOR = 'a, button, input, textarea, select, [role="button"], .subContent3, .icon'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const dotPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const mousePos = useRef({ x: 0, y: 0 })
  const visibleRef = useRef(false)
  const rafRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canUseCustomCursor) return

    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.35
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.35
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!visibleRef.current) {
        dotPos.current = { x: e.clientX, y: e.clientY }
        ringPos.current = { x: e.clientX, y: e.clientY }
        visibleRef.current = true
        setIsVisible(true)
      }

      const target = e.target
      setIsHovering(Boolean(target && target.closest(HOVER_SELECTOR)))
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)
    const onMouseLeave = () => {
      visibleRef.current = false
      setIsVisible(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className={`cursor-ring ${isVisible ? "is-visible" : ""}`}>
        <div className={`cursor-ring-inner ${isHovering ? "is-hovering" : ""} ${isClicking ? "is-clicking" : ""}`}></div>
      </div>
      <div ref={dotRef} className={`cursor-dot ${isVisible ? "is-visible" : ""}`}>
        <div className={`cursor-dot-inner ${isClicking ? "is-clicking" : ""}`}></div>
      </div>
    </>
  )
}

export default CustomCursor
