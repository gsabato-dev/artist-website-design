import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function InstaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <Instagram className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="font-serif text-3xl md:text-4xl mb-2">Tango Berlin</h1>
          <p className="text-muted-foreground">Private lessons & live singing</p>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full" size="lg">
            <Link href="/lessons">Book private lesson</Link>
          </Button>

          <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
            <Link href="/singing">Book singing for event</Link>
          </Button>

          <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
            <Link href="/singing#videos">Watch videos</Link>
          </Button>

          <Button asChild variant="ghost" className="w-full" size="lg">
            <Link href="/testimonials">Testimonials</Link>
          </Button>

          <Button asChild variant="ghost" className="w-full" size="lg">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <div className="mt-8">
          <Button asChild variant="link">
            <Link href="/">Visit full website</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
