"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Instagram, Mail } from "lucide-react"

export default function ContactPage() {
  const [inquiry, setInquiry] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const whatsappLink =
    "https://wa.me/393519252854?text=Hi%20Gabriele%2C%20I%27d%20like%20to%20ask%20about%20tango%20lessons%20or%20singing%20for%20events."

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitStatus("sending")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xbdjlykr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (response.ok) {
        form.reset()
        setInquiry("")
        setSubmitStatus("success")
        return
      }
    } catch (error) {
      console.error("Form submission error:", error)
    }

    setSubmitStatus("error")
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-portrait.png')",
              backgroundPosition: "center 37%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent/75 to-primary/80" />
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl mb-6 text-primary-foreground">Contact</h1>
              <p className="text-lg text-primary-foreground/90">
                Get in touch about lessons, performances, or other inquiries
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">What are you interested in?</Label>
                    <Select value={inquiry} onValueChange={setInquiry}>
                      <SelectTrigger id="inquiry">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lessons">Private lessons</SelectItem>
                        <SelectItem value="singing">Singing for events</SelectItem>
                        <SelectItem value="dj">DJ</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="inquiry" value={inquiry} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      name="message"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={submitStatus === "sending"}>
                    {submitStatus === "sending" ? "Sending..." : "Send message"}
                  </Button>

                  {submitStatus === "success" && (
                    <p className="text-sm text-foreground text-center">Thanks! Your message has been sent.</p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-sm text-destructive text-center">
                      Something went wrong. Please try again or use WhatsApp.
                    </p>
                  )}
                  {submitStatus === "idle" && (
                    <p className="text-sm text-muted-foreground text-center">I typically respond within 24-48 hours</p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <div className="mt-12 text-center">
              <h3 className="font-serif text-2xl mb-6">Other ways to connect</h3>
              <div className="flex justify-center gap-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium">
                    WhatsApp me
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@g_sabato</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
