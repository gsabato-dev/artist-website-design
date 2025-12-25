import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Heart, Music2, Brain } from "lucide-react"

export default function LessonsPage() {
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
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/30 to-accent/40" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-balance text-primary-foreground">
                Private Tango Lessons
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
                Develop your dance through clear, precise teaching that honors both technique and connection.
              </p>
            </div>
          </div>
        </section>

        {/* Who Lessons Are For */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Who these lessons are for</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Solo dancers</h3>
                  <p className="text-sm text-muted-foreground">Build your own technique and musicality independently</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Couples</h3>
                  <p className="text-sm text-muted-foreground">Deepen your connection and shared understanding</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">All levels</h3>
                  <p className="text-sm text-muted-foreground">From complete beginners to advanced dancers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Work On */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/outdoor-full.png')",
            }}
          />
          <div className="absolute inset-0 bg-muted/50" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">What we work on</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-xl mb-2 flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-accent" />
                    Connection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building authentic, responsive connection through awareness and listening. We explore how to
                    communicate clearly through the embrace and develop sensitivity to your partner's movement.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2 flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-accent" />
                    Musicality
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding tango music deeply—its structure, phrasing, and emotional quality. We work on
                    expressing the music through movement and developing your own musical voice.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2 flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-accent" />
                    Technique
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Precise biomechanics that support freedom and expression. We focus on balance, axis, dissociation,
                    and efficient movement patterns that serve the dance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Teaching approach</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                My teaching combines analytical clarity with somatic awareness. I break down complex movements into
                understandable parts while maintaining focus on how the dance feels in your body.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each lesson is tailored to your specific needs and goals. We work at a pace that allows for genuine
                integration, not just surface-level learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The approach is grounded, precise, and human. No tango mysticism or unnecessary jargon—just clear
                guidance that helps you develop your own authentic expression.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="bg-secondary py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">Practical information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Location:</strong> Berlin (Neukölln and Kreuzberg studios)
                </p>
                <p>
                  <strong className="text-foreground">Languages:</strong> English, Italian, Spanish
                </p>
                <p>
                  <strong className="text-foreground">Format:</strong> 60 or 90-minute sessions
                </p>
                <p>
                  <strong className="text-foreground">Booking:</strong> Flexible scheduling via contact form
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">What students say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "The clarity and precision in teaching helped me understand concepts I'd struggled with for years.
                    Highly recommended."
                  </p>
                  <p className="text-sm text-muted-foreground">— Andreas, Berlin</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "A rare combination of technical expertise and genuine care for students' progress. Every lesson
                    builds on the last."
                  </p>
                  <p className="text-sm text-muted-foreground">— Sofia, Amsterdam</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to start?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book your first lesson and begin developing your dance.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Book a lesson</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
