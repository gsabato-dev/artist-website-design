"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    vimeoId: "1161634113",
    orientation: "horizontal",
    caption: "Singing Paciencia with Ensemble Sin Vuelta at Pippo Tango in Berlin",
  },
  {
    vimeoId: "1161633937",
    orientation: "vertical",
    caption: "Improvising Yuyo Verde with Roger Helou, Director of Silencio Tango",
  },
  {
    vimeoId: "1161633966",
    orientation: "vertical",
    caption: "Singing Naranjo en Flor with Gustavo Garay, project Sombras de Tango",
  },
  {
    vimeoId: "1161634020",
    orientation: "horizontal",
    caption: "Singing Tinta Roja at the KitKat Club with Ensemble Sin Vuelta",
  },
  {
    vimeoId: "1161634004",
    orientation: "vertical",
    caption: "Improvising Malena with Leonel Gasso",
  },
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
        {/* Previous */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-0 z-10 bg-background/80 hover:bg-background"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Video */}
        <div
          className={`${
            isVertical ? "aspect-[9/16] max-w-xs" : "aspect-video max-w-3xl"
          } w-full bg-background rounded-lg overflow-hidden mx-12`}
        >
          <iframe
            key={current.vimeoId}
            src={`https://player.vimeo.com/video/${current.vimeoId}?h=${current.hash}&title=0&byline=0&portrait=0`}
            className="h-full w-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Next */}
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

      {/* Dots */}
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