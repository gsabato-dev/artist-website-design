import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Tango Berlin</h3>
            <p className="text-sm text-muted-foreground">
              Private tango lessons and live tango singing for events in Berlin.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/lessons" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Private Tango Lessons
              </Link>
              <Link href="/singing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Singing for Events
              </Link>
              <Link
                href="/testimonials"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tango Berlin. Based in Berlin & Mexico.</p>
        </div>
      </div>
    </footer>
  )
}
