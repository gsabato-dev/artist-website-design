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
              backgroundPosition: "center 35%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-accent/80" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-primary-foreground">About Gabriele</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">Tango teacher, singer, and performer</p>
              <p className="text-lg md:text-xl text-primary-foreground/90">Based between Berlin and Mexico</p>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Section 1. The path</p>
            <h2 className="font-serif text-3xl md:text-4xl">A long relationship with tango</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Gabriele Sabato was born in Southern Italy to an Argentinian mother and discovered tango almost twenty
                years ago. What began as a fascination with movement and music gradually became a long-term practice
                that now spans dance, voice, and teaching.
              </p>
              <p>
                He started dancing tango in Rome, where he built a strong technical and musical foundation through
                intensive study with a variety of maestros and continuous immersion in the social and performance
                scenes. From the beginning, tango was not only a dance for him, but a language. One that lives in the
                body, in listening, and in timing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/outdoor-full.png')",
              backgroundPosition: "center 25%",
            }}
          />
          <div className="absolute inset-0 bg-muted/70" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Section 2. Dance, music, and voice
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">From movement to music</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Parallel to tango, Gabriele has a long relationship with music. He studied and sang classical music
                  for many years, performing in choirs and later exploring rock and musical theatre. This musical
                  background naturally deepened his relationship with tango music.
                </p>
                <p>
                  Over time, this led him to work as a tango DJ internationally for almost a decade, and later to step
                  forward as a tango singer. In Berlin, he began performing with different musical formations and
                  orchestras, gradually focusing on live tango singing in milongas, concerts, and curated events.
                </p>
                <p>
                  His work as a singer is grounded in musical listening, atmosphere, and respect for the dance floor,
                  rather than spectacle. The goal is always to serve the moment and the space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Section 3. Collaborations and performances
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Selected collaborations</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Over the years, Gabriele has collaborated and performed with a range of musicians and ensembles in
                Berlin and internationally, including orchestral projects, small formations, and duo settings.
              </p>
              <div>
                <p className="mb-2">These collaborations span:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Tango orchestras and ensembles in Berlin</li>
                  <li>Live performances at milongas and concerts</li>
                  <li>Interdisciplinary and experimental tango-related projects</li>
                </ul>
              </div>
              <p>
                Rather than focusing on a fixed formation, his work adapts to the context. From intimate milongas to
                concert settings, always with attention to musical quality and presence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-secondary py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Section 4. Teaching philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Teaching tango</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Gabriele has been teaching tango for over ten years. His teaching is shaped both by his long tango
                  experience and by his academic background, where he developed strong skills in explanation, structure,
                  and pedagogy.
                </p>
                <div>
                  <p className="mb-2">His approach combines:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Clear technical foundations</li>
                    <li>Analytical understanding of movement and connection</li>
                    <li>A somatic, body-based perspective that supports awareness and integration</li>
                  </ul>
                </div>
                <p>
                  He is a trained somatic coach, and this influences how lessons unfold. Rather than overwhelming
                  students with information, lessons focus on a few essential principles that can be felt, embodied, and
                  applied immediately.
                </p>
                <div>
                  <p className="mb-2">He works primarily with:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Individual students</li>
                    <li>Couples</li>
                    <li>Small focused groups</li>
                  </ul>
                </div>
                <p>
                  Lessons are adapted to the dancer's level, goals, and physical needs, supporting both progress and
                  sustainability over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Section 5. How it feels to work together
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">What to expect</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a teacher, Gabriele is known for being clear, attentive, and direct, while maintaining a warm and
                respectful atmosphere.
              </p>
              <p>As a performer and singer, he values professionalism, presence, and collaboration.</p>
              <p>
                Whether in a private lesson or on stage, the focus remains the same. Listening. Timing. And creating
                something that feels alive.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-muted py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Section 6. Where he is based
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Berlin and beyond</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>Gabriele currently lives between Berlin and Mexico, working locally and internationally.</p>
                <p>
                  He offers private tango lessons primarily in Berlin and accepts singing bookings for events, milongas,
                  and concerts in Europe and abroad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 lg:px-8 py-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl">Work with Gabriele</h2>
            <div className="space-y-2 text-lg text-muted-foreground leading-relaxed">
              <p>If you are looking for focused tango coaching, you can book a private lesson.</p>
              <p>If you are organizing an event and want live tango singing, you can request a booking.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg">
                <Link href="/contact">Book a private lesson</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/contact">Request singing for an event</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
