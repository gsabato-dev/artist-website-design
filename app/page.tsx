import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Music, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-portrait.png')",
              backgroundPosition: "center 47%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/25 to-accent/35" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24 text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-balance text-primary-foreground">
              Tango teacher, singer and performer
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto text-pretty mb-8">
              I'm Gabriele, born to an Argentine mother. Nearly 20 years as a tango dancer and singer, classically trained, teaching and performing in Berlin's tango scene.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="#video">
                  Watch a Live Show
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
                <Link href="/singing#videos">
                  Listen to a Live Performance
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Two Offer Blocks */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Private Tango Lessons</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'll help you dance tango in a way that feels good and makes sense. Whether you're learning solo or
                  with a partner, I teach all levels and focus on connection, musicality, and technique that actually
                  works.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  €80/hour • All levels • At my studio in Friedrichshain
                </p>
                <Button asChild className="w-full">
                  <Link href="/lessons">Learn more</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-lg">
                  <Music className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Singing for Events</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I bring traditional tango singing to your milonga, concert, or private event.
                  Live performances rooted in the authentic spirit of Buenos Aires.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Milongas • Concerts • Weddings • Solo or ensemble
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/singing">Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonial Strip */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <TestimonialCarousel />
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/tango-couple.png')",
            }}
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Live Performance</h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/vdhk0T3JqR8?si=cUX-NeIf949mP5sg"
                  title="Live performance"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Short Intro */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl">About me</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Gabriele, a tango teacher, singer, and performer based in Berlin. I was born in Southern Italy to
                an Argentinian mother, and I discovered tango almost twenty years ago. I started dancing in Rome,
                studying with many different teachers and building a strong foundation in technique, musicality, and
                improvisation.
              I've performed at festivals and milongas locally and internationally, sharing tango
                through dance. </p>
              <p>My background in classical music and years of choral singing naturally led me to tango
                music, first as a DJ, then as a singer. 
              
                As a DJ, I've played at festivals and milongas worldwide,
                including in Buenos Aires.
              </p>
              <p>
                As a singer, I've performed with musicians and ensembles in Berlin and internationally, bringing tango
                music to milongas, concerts, and other creative settings.
              </p>
              <p>
                I've been teaching tango for over ten years, combining clear structure with a body-based approach that
                helps you learn in a way that actually sticks.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to begin?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're looking for private lessons or booking a performance, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">
                  Book a Lesson
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30">
                <Link href="/contact">Request a Singing Booking</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
