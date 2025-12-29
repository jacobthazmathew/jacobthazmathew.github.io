import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const writings = [
  {
    title: "Ethical Frameworks for Clinical AI Implementation",
    description:
      "A comprehensive analysis of ethical considerations and structured frameworks for implementing AI systems in clinical settings. Covers patient safety, explainability, and clinical validation.",
    topics: ["AI Ethics", "Clinical Safety", "Healthcare Policy"],
    link: "#",
  },
  {
    title: "From Hype to Reality: AI in Emergency Medicine",
    description:
      "An evidence-based examination of AI applications in emergency medicine, separating promising innovations from overhyped solutions. Written from frontline clinical experience.",
    topics: ["Emergency Medicine", "Clinical AI", "Real-World Evidence"],
    link: "#",
  },
  {
    title: "Building Trust in Healthcare AI Systems",
    description:
      "Exploring the critical factors that build or erode clinician and patient trust in medical AI. Covers transparency, explainability, and accountability in healthcare technology.",
    topics: ["Trust & Transparency", "Explainable AI", "Clinician Adoption"],
    link: "#",
  },
  {
    title: "Regulatory Readiness for Digital Health Startups",
    description:
      "A practical guide for health tech founders navigating FDA approval, CE marking, and other regulatory pathways. Emphasizes early planning and clinical validity.",
    topics: ["Healthcare Regulation", "Startup Strategy", "Regulatory Affairs"],
    link: "#",
  },
]

export function Writing() {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Writing & Thought Leadership</h2>
        <div className="space-y-6">
          {writings.map((article, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{article.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topic) => (
                      <span key={topic} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild className="md:mt-0 bg-transparent">
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
