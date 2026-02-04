"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  { src: "/videos/horizontal1.mp4", orientation: "horizontal", type: "video/mp4", caption: "Singing Paciencia with Ensemble Sin Vuelta at Pippo Tango in Berlin" },
  { src: "/videos/vertical3.mp4", orientation: "vertical", type: "video/mp4", caption: "Improvising Yuyo Verde with Roger Helou, Director of Silencio Tango" },
  { src: "/videos/vertical2.mp4", orientation: "vertical", type: "video/mp4", caption: "Singing Naranjo en Flor with Gustavo Garay, project Sombras de tango" },
  { src: "/videos/horizontal2.mp4", orientation: "horizontal", type: "video/mp4", caption: "Singing Tinta Roja at the infamous Kitkat Club with Ensemble Sin Vuelta" },
  { src: "/videos/vertical1.mp4", orientation: "vertical", type: "video/mp4", caption: "Improvising Malena with Leonel Gasso" },
]

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  const current = videos[currentIndex]
  const isVertical = current.orientation === "vertical"

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-0 z-10 bg-background/80 hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Video Container */}
        <div
          className={`${
            isVertical ? "aspect-[9/16] max-w-xs" : "aspect-video max-w-3xl"
          } w-full bg-background rounded-lg overflow-hidden mx-12 transition-all duration-300`}
        >
          <video
            key={current.src}
            className="h-full w-full object-cover"
            controls
            preload="metadata"
          >
            <source src={current.src} type={current.type} />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-0 z-10 bg-background/80 hover:bg-background"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Caption */}
      <p className="text-center text-muted-foreground mt-4 text-sm md:text-base italic">
        {current.caption}
      </p>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-foreground" : "bg-foreground/30"
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
