import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoCarousel } from "@/components/video-carousel"
import { Music, Calendar, Users2 } from "lucide-react"

export default function SingingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url('/images/BTCO.jpg')",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance text-white drop-shadow-lg">
                Singing for Events
              </h1>
              <p className="text-lg md:text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
                Traditional tango singing, rooted in the spirit of Buenos Aires.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Events */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-14 text-center">Types of events</h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
              <Card className="group border-2 border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Users2 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-medium text-xl mb-3">Milongas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Traditional and alternative tango salons throughout Berlin
                  </p>
                </CardContent>
              </Card>
              <Card className="group border-2 border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Music className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-medium text-xl mb-3">Concerts</h3>
                  <p className="text-muted-foreground leading-relaxed">Dedicated performances and tango showcases</p>
                </CardContent>
              </Card>
              <Card className="group border-2 border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-medium text-xl mb-3">Private events</h3>
                  <p className="text-muted-foreground leading-relaxed">Weddings, celebrations, and special occasions</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Request a booking</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="videos" className="bg-muted py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-center">Performances</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Audience recordings from live events.
              </p>
              <VideoCarousel />
            </div>
          </div>
        </section>

        {/* About & Collaborations */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center">About</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                My journey began in choral classical music, where I performed as a tenor at prestigious festivals
                including the Ushuaia Classica in Orvieto, singing Mozart's Requiem under the direction of Jorge
                Uliarte. In 2019, I began singing tango, training with renowned singers such as Carlos Rossi, Juan
                Villarreal, and Roberto Minondi.
              </p>
              <p>
                For several years, I served as the principal vocalist of the Berlino Tango Community Orchestra (BTCO),
                performing regularly throughout Berlin's tango scene. Beyond the orchestra, I've developed a rich
                collaborative practice with internationally acclaimed artists in various ensemble formats, from duos to
                larger groups. My musical partnerships include Leonel Gasso (award-winning bandoneonist), Gabriel
                Battaglia (Buenos Aires-born guitarist), Emile and Maxime Guion (pianist and bandoneón from Orquesta de
                Leones), Gustavo Garay (violinist and former member of Sexteto Milonguero), and Asaph Meller (pianist
                and founder of Las Almas collective).
              </p>
              <p>
                I perform regularly throughout Berlin's tango scene, from the historic Rotes Rathaus (Berlin City Hall)
                to renowned milongas including Tango Nou, Pippo Tango and Tango Loft. I'm a resident performer at the
                infamous KitKat Club.
              </p>
            </div>
            <figure className="mt-12">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/LIVE_Trio_infernal.jpg"
                  alt="Gabriele live at TangoLoft with Leonel Gasso and Gabriel Battaglia"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Gabriele live at TangoLoft with Leonel Gasso and Gabriel Battaglia while being filmed by German TV channel rbb
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent text-accent-foreground py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Book a performance</h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Bring the spirit of Buenos Aires tango to your event
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8 py-6">
              <Link href="/contact">Request a booking</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
