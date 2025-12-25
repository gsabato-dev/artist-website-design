import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/suit-profile.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/80" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-primary-foreground">About</h1>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I grew up in Italy surrounded by music—opera, folk songs, and the radio always playing in the kitchen.
                When I discovered tango during a trip to Argentina, it felt like coming home to something I didn't know
                I was looking for.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What started as curiosity became a deep study. I spent years in Buenos Aires learning from maestros,
                dancing in neighborhood milongas, and slowly understanding that tango is as much about listening as it
                is about moving.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The voice followed naturally. Singing the music I'd been dancing to revealed new layers—the poetry, the
                phrasing, the emotional architecture beneath each song. Teaching emerged from these same questions: How
                do we communicate clearly through the embrace? How does the music guide our choices?
              </p>
            </div>
          </div>
        </section>

        {/* Connection Section */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/outdoor-full.png')",
            }}
          />
          <div className="absolute inset-0 bg-muted/90" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">Dance, voice, and teaching</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  These three practices inform each other. Dancing teaches me about rhythm and connection. Singing
                  demands technical precision and emotional honesty. Teaching requires breaking down complexity into
                  clear, actionable steps.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines analytical clarity with somatic awareness. I believe in understanding the
                  mechanics—the biomechanics of movement, the structure of music—while staying deeply connected to how
                  things feel in the body. No mysticism, no unnecessary jargon, just honest work toward genuine
                  expression.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Collaborations */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Selected collaborations and influences</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-xl mb-3">Teachers and mentors</h3>
                <p className="text-muted-foreground">
                  Pablo Verón, Chicho Frumboli, Javier Rodriguez, Geraldine Rojas, Gustavo Naveira
                </p>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-3">Vocal coaches</h3>
                <p className="text-muted-foreground">Lidia Borda, Ariel Ardit, Guillermo Fernández</p>
              </div>
              <div>
                <h3 className="font-medium text-xl mb-3">Performance venues</h3>
                <p className="text-muted-foreground">
                  Tango Spiegelsaal (Berlin), Clärchens Ballhaus (Berlin), La Milonguita (Mexico City), Salon Canning
                  (Buenos Aires)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-secondary py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Berlin & Mexico</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm based primarily in Berlin, with extended periods in Mexico City. This allows me to stay connected to
                different tango communities and continue learning from both European and Latin American traditions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 lg:px-8 py-16 text-center">
          <Button asChild size="lg">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </>
  )
}
