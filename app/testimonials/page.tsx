import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TestimonialsPage() {
  const studentTestimonials = [
    {
      quote: "The lessons transformed my understanding of connection and musicality. Clear, precise, and deeply human.",
      name: "Maria",
      location: "Berlin",
    },
    {
      quote: "The clarity and precision in teaching helped me understand concepts I'd struggled with for years.",
      name: "Andreas",
      location: "Berlin",
    },
    {
      quote: "A rare combination of technical expertise and genuine care for students' progress.",
      name: "Sofia",
      location: "Amsterdam",
    },
    {
      quote: "Every lesson builds on the last. I've seen more progress in three months than in the previous year.",
      name: "Lucas",
      location: "Berlin",
    },
    {
      quote: "The analytical approach paired with body awareness work is exactly what I needed.",
      name: "Elena",
      location: "Madrid",
    },
    {
      quote: "No unnecessary mystification, just clear guidance that helps you find your own expression.",
      name: "Thomas",
      location: "Copenhagen",
    },
  ]

  const organizerTestimonials = [
    {
      quote: "The performance created exactly the atmosphere we were hoping for. Professional, warm, and authentic.",
      name: "Claudia",
      role: "Tango Spiegelsaal",
    },
    {
      quote: "A voice that truly understands tango. Our guests were captivated throughout the evening.",
      name: "Ricardo",
      role: "Milonga del Barrio",
    },
    {
      quote: "Reliable, professional, and a genuine understanding of what makes a milonga special.",
      name: "Isabella",
      role: "Clärchens Ballhaus",
    },
    {
      quote: "The quality of performance exceeded our expectations. Will definitely book again.",
      name: "Marco",
      role: "Tango Brujo",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/testimonial.png')",
              backgroundPosition: "center 35%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent/75 to-primary/80" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-primary-foreground">Testimonials</h1>
              <p className="text-lg text-primary-foreground/90">What students and organizers have to say</p>
            </div>
          </div>
        </section>

        {/* Private Students */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Private students</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentTestimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <p className="text-sm text-muted-foreground">
                      — {testimonial.name}, {testimonial.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers / Hosts */}
        <section className="bg-muted py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Organizers & hosts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {organizerTestimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                      <p className="text-sm text-muted-foreground">
                        — {testimonial.name}, {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
