"use client"

import type React from "react"

import { useState } from "react"
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Form submission logic would go here
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
              backgroundImage: "url('/images/outdoor-profile.png')",
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">What are you interested in?</Label>
                    <Select
                      value={formData.inquiry}
                      onValueChange={(value) => setFormData({ ...formData, inquiry: value })}
                    >
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">I typically respond within 24-48 hours</p>
                </form>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <div className="mt-12 text-center">
              <h3 className="font-serif text-2xl mb-6">Other ways to connect</h3>
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@example.com</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@tangoberlin</span>
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
