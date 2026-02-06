import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Music, User, Mic2, Sparkles } from "lucide-react"

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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-accent/60" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24 text-center">
            <p className="text-sm md:text-base uppercase tracking-widest text-primary-foreground/80 mb-4">
              Tango teacher, singer & performer
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-balance text-primary-foreground">
              Learn tango, embrace your body!
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto text-pretty mb-8">
              I'm Gabriele, tango dancer for nearly 20 years, classically trained singer, son of a porteña from Buenos Aires. I teach and perform in Berlin, helping you find your natural expression in the dance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">
                  Book a Lesson
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
                <Link href="#video">
                  Watch a Performance
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Quote */}
        <section className="bg-muted/50 py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl italic text-muted-foreground">
                "He'll crawl into your brain and rearrange how your body moves. The lessons are tough, ridiculously fun, and never boring."
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">Pauline, Berlin</footer>
            </blockquote>
          </div>
        </section>

        {/* Three Offer Blocks */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-lg">
                  <User className="h-8 w-8 text-primary" />
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
                  <Mic2 className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Singing for Events</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I bring traditional tango singing to your milonga, concert, or private event.
                  My performances are rooted in the authentic spirit of Buenos Aires, performed solo, with musicians, or as part of an ensemble.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Milongas • Concerts • Weddings • Solo or ensemble
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/singing">Learn more</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Dance Performance</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Want to bring some spice into your event? I perform tango dances at milongas, concerts, and private celebrations,
                  bringing authentic Argentine passion and energy to your gathering.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Milongas • Concerts • Weddings • Celebrations
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full">
                    <Link href="/contact">Book a Performance</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="#video">Watch a Performance</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
                Born in Southern Italy to an Argentinian mother, I discovered tango nearly twenty years ago.
                I studied dance with renowned teachers including Javier Rodriguez and Andres Laza Moreno, building a strong foundation
                in technique, musicality, and improvisation.
              </p>
              <p>
                My training as a classical singer and years of choral performance shaped how I approach both dancing and singing.
                For singing, I trained with exceptional tango vocalists including Carlos Rossi and Roberto Minondi, bringing
                deep musicality and authentic Argentine expression to every performance.
              </p>
              <p>
                My background as a university teacher and somatic coach shaped how I structure my lessons.
                I combine clear, analytical instruction, understanding the "why" behind every step, with embodied learning
                that lets your body actually feel and integrate the movement. You leave each lesson not just knowing
                what to do, but feeling it in your body, ready to dance with confidence and presence.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Start your tango journey</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book your first lesson and discover how tango can transform the way you move and connect.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">
                Book Your First Lesson
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
