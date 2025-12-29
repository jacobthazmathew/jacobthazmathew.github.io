import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Contact</h2>
        <div className="space-y-8">
          <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl">
            I work with health technology startups, healthcare organizations, innovation teams, and founders who need
            clinical expertise, AI safety guidance, or strategic advisory. Open to consulting engagements, research
            collaborations, and advisory roles.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="mailto:jacobthazmathew@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/jacobthazmathew" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
