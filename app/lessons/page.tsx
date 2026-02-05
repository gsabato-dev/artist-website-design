import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Music2, User, Users, Heart } from "lucide-react"

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
              backgroundImage: "url('/images/suit-profile.png')",
              backgroundPosition: "center 33%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/30 to-accent/40" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-balance text-primary-foreground">
                Private Tango Lessons
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
                I'll help you dance tango in a way that feels good and looks great.
              </p>
            </div>
          </div>
        </section>

        {/* Lesson Options */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Lesson Options</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Card 1: Private Lessons */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-4">Private Lessons</h3>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-base text-muted-foreground">
                        I work with you one-on-one (or with your partner) to focus on exactly what you need.
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pricing</p>
                      <p className="text-lg font-medium text-foreground">€80 / hour</p>
                      <p className="text-sm text-muted-foreground mt-2">5-lesson package: €360</p>
                    </div>

                    {/* Location */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Location</p>
                      <p className="text-sm text-foreground">At my studio in Friedrichshain</p>
                    </div>

                    {/* Buttons */}
                    <div className="pt-4 border-t border-border flex gap-3">
                      <Button asChild className="flex-1">
                        <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">
                          Book a Lesson
                        </Link>
                      </Button>
                      <Button asChild variant="secondary" className="flex-1">
                        <Link href="https://cal.com/gabriele-tango/private-5lesson-package" target="_blank" rel="noopener noreferrer">
                          Book a Package
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Focused Small Groups */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-4">Focused Small Groups</h3>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-base text-muted-foreground">
                        Learn with your friends in a fun, relaxed, and focused setting.
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pricing</p>
                      <p className="text-lg font-medium text-foreground">€120 / 1.5 hours</p>
                      <p className="text-sm text-muted-foreground mt-2">Max 6 people per group</p>
                    </div>

                    {/* Location */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Location</p>
                      <p className="text-sm text-foreground">At my studio in Friedrichshain</p>
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-border">
                      <Button asChild className="w-full">
                        <Link href="https://cal.com/gabriele-tango/focused-small-group" target="_blank" rel="noopener noreferrer">
                          Book a Focused Group Lesson
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Intensive Seminar */}
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl mb-4">Intensive Seminar</h3>

                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-base text-muted-foreground">
                        A focused, in-depth session designed for concentrated work. Ideal for couples or specific technical goals.
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Pricing</p>
                      <p className="text-lg font-medium text-foreground">€160 / 2 hours</p>
                    </div>

                    {/* Location */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Location</p>
                      <p className="text-sm text-foreground">At your place or my studio</p>
                    </div>

                    {/* Button */}
                    <div className="pt-4 border-t border-border">
                      <Button asChild className="w-full">
                        <Link href="https://cal.com/gabriele-tango/private-1-on-1-lesson-intensive" target="_blank" rel="noopener noreferrer">
                          Book an Intensive
                        </Link>
                      </Button>
                    </div>
                  </div>
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
              backgroundImage: "url('/images/tango-couple.png')",
              backgroundPosition: "center 22%",
            }}
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto bg-card/70 backdrop-blur-sm rounded-lg p-8 md:p-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">What we work on</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-xl mb-2 flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-accent" />
                    Connection
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    How do you connect with yourself and your partner while dancing? I'll help you build real, responsive connection through listening and awareness. You'll learn to communicate clearly through the embrace and tune into your partner's movement.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2 flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-accent" />
                    Musicality
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    I'll teach you to really understand tango music: its structure, phrasing, and emotion. You'll learn to express the music through your body and develop your own style.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-xl mb-2 flex items-center gap-2">
                    <Music2 className="h-5 w-5 text-accent" />
                    Technique
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Good technique should free you up, not hold you back. I focus on posture, walking, and movement patterns that actually feel good and serve your dance.
                  </p>
                </div>
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
                    "Being a dance teacher myself, I appreciate Gabriele's skill and reliability. In our private sessions I didn't only improve my tango; I learned a lot about myself. We worked on connection, posture, body tension, and how to make an embrace feel comfortable. His teaching gave me inspiration for other areas of my life. Highly recommended"
                  </p>
                  <p className="text-sm text-muted-foreground">— Judith, Berlin</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Wildly professional and slightly dangerous to your comfort zone. He'll crawl into your brain and rearrange how your body moves. Yes, he's overpriced, and yes, he's absolutely worth it. The lessons are tough, ridiculously fun, and never boring. You'll complain, laugh, sweat, and then shamelessly book the next lesson anyway"
                  </p>
                  <p className="text-sm text-muted-foreground">— Pauline, Berlin</p>
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
              <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">Book a lesson</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
