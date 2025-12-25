import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/25 to-accent/35" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8 py-24 text-center">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 text-balance text-primary-foreground">
              Tango teacher, singer, and performer
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/95 mb-12 max-w-2xl mx-auto text-pretty">
              Gabriele Sabato is a tango teacher, singer, and performer based between Berlin and Mexico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/lessons">Book a private lesson</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/singing">Book singing for an event</Link>
              </Button>
            </div>
            <div className="mt-8">
              <a
                href="#video"
                className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
              >
                Watch a live performance
              </a>
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
                  Learn tango with a clear, analytical, and somatic approach. Whether you're dancing solo or as a
                  couple, I work with all levels to develop connection, musicality, and technique.
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
                  Bring authentic tango atmosphere to your milonga, concert, or private event. Professional live singing
                  that creates presence and trust.
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
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-lg md:text-xl italic text-foreground mb-4">
                "The lessons transformed my understanding of connection and musicality. Clear, precise, and deeply
                human."
              </blockquote>
              <cite className="text-sm text-muted-foreground">— Maria, Berlin</cite>
            </div>
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">YouTube video embed placeholder</p>
              </div>
            </div>
          </div>
        </section>

        {/* Short Intro */}
        <section className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl">Short bio</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Gabriele Sabato is a tango teacher, singer, and performer based between Berlin and Mexico.</p>
              <p>
                Born in Southern Italy to an Argentinian mother, he encountered tango almost twenty years ago and has
                since developed a practice rooted in dance, music, and embodiment.
              </p>
              <p>
                He began his tango path in Rome, studying with a wide range of maestros and developing a strong
                foundation in technique, musicality, and improvisation. Alongside dance, his background in classical
                music and years of choral singing led him naturally toward tango music, first as a DJ and later as a
                singer.
              </p>
              <p>
                Gabriele has performed and collaborated with musicians and ensembles in Berlin and internationally,
                bringing tango music to milongas, concerts, and interdisciplinary settings. He has been teaching tango
                for over ten years, combining structured pedagogy with a somatic, body-based approach that supports
                clarity, connection, and sustainable learning.
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
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
