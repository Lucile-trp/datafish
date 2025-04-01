"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  oscillationSpeed: number
  oscillationAmplitude: number
  oscillationOffset: number
}

export default function BubblesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubbles = useRef<Bubble[]>([])
  const animationFrameRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initBubbles()
    }

    const initBubbles = () => {
      const bubbleCount = Math.floor(window.innerWidth / 60)
      bubbles.current = []

      for (let i = 0; i < bubbleCount; i++) {
        bubbles.current.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * canvas.height,
          size: Math.random() * 15 + 5,
          speed: Math.random() * 0.8 + 0.3,
          opacity: Math.random() * 0.15 + 0.05,
          oscillationSpeed: Math.random() * 0.01 + 0.005,
          oscillationAmplitude: Math.random() * 0.7 + 0.2,
          oscillationOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp
      const deltaTime = timestamp - timeRef.current
      timeRef.current = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      bubbles.current.forEach((bubble) => {
        bubble.y -= bubble.speed
        const oscillation =
          Math.sin(timestamp * bubble.oscillationSpeed + bubble.oscillationOffset) * bubble.oscillationAmplitude
        const currentX = bubble.x + oscillation

        if (bubble.y < -bubble.size * 2) {
          bubble.y = canvas.height + bubble.size
          bubble.x = Math.random() * canvas.width
        }

        const gradient = ctx.createRadialGradient(currentX, bubble.y, 0, currentX, bubble.y, bubble.size)

        const baseOpacity = bubble.opacity
        gradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity * 0.1})`)
        gradient.addColorStop(0.8, `rgba(200, 230, 255, ${baseOpacity * 0.2})`)
        gradient.addColorStop(1, `rgba(150, 200, 255, ${baseOpacity * 0.3})`)

        ctx.beginPath()
        ctx.arc(currentX, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.strokeStyle = `rgba(255, 255, 255, ${baseOpacity * 0.5})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        ctx.beginPath()
        const highlightSize = bubble.size * 0.4
        const highlightX = currentX - bubble.size * 0.3
        const highlightY = bubble.y - bubble.size * 0.3

        const highlightGradient = ctx.createRadialGradient(
          highlightX,
          highlightY,
          0,
          highlightX,
          highlightY,
          highlightSize,
        )
        highlightGradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity * 0.8})`)
        highlightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

        ctx.arc(highlightX, highlightY, highlightSize, 0, Math.PI * 2)
        ctx.fillStyle = highlightGradient
        ctx.fill()

        ctx.beginPath()
        const smallHighlightSize = bubble.size * 0.15
        const smallHighlightX = currentX + bubble.size * 0.3
        const smallHighlightY = bubble.y + bubble.size * 0.3

        const smallHighlightGradient = ctx.createRadialGradient(
          smallHighlightX,
          smallHighlightY,
          0,
          smallHighlightX,
          smallHighlightY,
          smallHighlightSize,
        )
        smallHighlightGradient.addColorStop(0, `rgba(255, 255, 255, ${baseOpacity * 0.6})`)
        smallHighlightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

        ctx.arc(smallHighlightX, smallHighlightY, smallHighlightSize, 0, Math.PI * 2)
        ctx.fillStyle = smallHighlightGradient
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animationFrameRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ backgroundColor: "transparent" }}
    />
  )
}

