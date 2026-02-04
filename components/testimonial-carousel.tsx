"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Being a dance teacher myself, I did not only improve my tango skills, I also learned a lot about myself.",
    name: "Judith",
    location: "Berlin",
  },
  {
    quote: "You'll complain, laugh, sweat, and shamelessly book the next class anyway.",
    name: "Pauline",
    location: "Berlin",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div
        className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <blockquote className="text-lg md:text-xl italic text-foreground mb-4">
          "{current.quote}"
        </blockquote>
        <cite className="text-sm text-muted-foreground">— {current.name}, {current.location}</cite>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsVisible(true)
              }, 300)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-foreground" : "bg-foreground/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
