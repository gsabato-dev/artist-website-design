import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Music, Calendar, Users2 } from "lucide-react"

export default function SingingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/outdoor-profile.png')",
              backgroundPosition: "center 28%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/35 via-accent/30 to-primary/40" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-balance text-accent-foreground">
                Singing for Events
              </h1>
              <p className="text-lg md:text-xl text-accent-foreground/90 text-pretty leading-relaxed">
                Live tango singing that creates atmosphere, presence, and authentic connection with your audience.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Events */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Types of events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg">
                    <Users2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Milongas</h3>
                  <p className="text-sm text-muted-foreground">
                    Traditional and alternative milongas throughout Berlin
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg">
                    <Music className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Concerts</h3>
                  <p className="text-sm text-muted-foreground">Dedicated performances and tango showcases</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-accent/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Private events</h3>
                  <p className="text-sm text-muted-foreground">Weddings, celebrations, and special occasions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-muted py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Performances</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                These are phone recordings from live events. They capture the authentic atmosphere and presence of the
                performances.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Video embed 1</p>
                </div>
                <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Video embed 2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Collaborations */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Selected collaborations</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground">
              <p>Tango Spiegelsaal, Berlin</p>
              <p>Clärchens Ballhaus, Berlin</p>
              <p>Salon Tango Berlin</p>
              <p>La Milonguita, Mexico City</p>
              <p>Tango Brujo, Berlin</p>
              <p>Milonga del Ángel, Buenos Aires</p>
            </div>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="bg-secondary py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">Technical requirements</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Sound:</strong> PA system with monitor, microphone (preference for
                  dynamic mic), one XLR input
                </p>
                <p>
                  <strong className="text-foreground">Space:</strong> Clear performance area, approximately 2x2 meters
                </p>
                <p>
                  <strong className="text-foreground">Setup time:</strong> 30 minutes for sound check
                </p>
                <p>
                  <strong className="text-foreground">Accompaniment:</strong> Can perform with recorded tracks or live
                  musicians
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">What organizers say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "The performance created exactly the atmosphere we were hoping for. Professional, warm, and
                    authentic."
                  </p>
                  <p className="text-sm text-muted-foreground">— Claudia, Tango Spiegelsaal</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "A voice that truly understands tango. Our guests were captivated throughout the evening."
                  </p>
                  <p className="text-sm text-muted-foreground">— Ricardo, Milonga del Barrio</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Book a performance</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your event and how live singing can enhance the experience.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a booking</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
