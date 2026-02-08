import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/lessons", label: "Private Tango Lessons" },
    { href: "/singing", label: "Singing for Events" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-background">
              <Image
                src="/images/gabrieletango_logo_navy.png"
                alt="Gabriele Tango Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-serif text-xl tracking-tight text-foreground">Gabriele Tango</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">
                Book your Tango Lesson
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full">
                  <Link href="https://cal.com/gabriele-tango/private-lesson" target="_blank" rel="noopener noreferrer">
                    Book your Tango Lesson
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
