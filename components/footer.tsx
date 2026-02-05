import Link from "next/link"
import { Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Gabriele Tango</h3>
            <p className="text-sm text-muted-foreground">
              Private tango lessons and live tango singing for events in Berlin.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/playlist?list=PLzt6Tuc15lt4UxzIJOQSoS0qmbG2J591c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="https://instagram.com/g_sabato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://wa.me/393519252854?text=Hi%20Gabriele%2C%20I%27d%20like%20to%20ask%20about%20tango%20lessons%20or%20singing%20for%20events."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gabriele Tango. Based in Berlin.</p>
        </div>
      </div>
    </footer>
  )
}
