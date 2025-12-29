import { Card } from "@/components/ui/card"

const workAreas = [
  {
    title: "Consulting",
    description:
      "Advising health technology startups, healthcare organizations, and innovation teams on clinical validity, workflow integration, AI safety, and regulatory readiness.",
    focus: ["Clinical validation", "AI safety", "Workflow integration", "Regulatory strategy"],
  },
  {
    title: "Research",
    description:
      "Evaluating and designing AI systems for healthcare settings, with emphasis on clinical decision support, documentation tools, and patient-facing applications.",
    focus: ["Clinical AI evaluation", "Explainable AI", "Healthcare AI frameworks", "Safety assessment"],
  },
  {
    title: "Policy Work",
    description:
      "Contributing to international medical policy discussions, AI governance frameworks, and ethical implementation guidelines for healthcare AI systems.",
    focus: ["AI governance", "Medical policy", "Ethical guidelines", "International standards"],
  },
  {
    title: "Startup Building",
    description:
      "Building and advising early-stage health technology ventures focused on reducing clinician burden, improving care quality, and strengthening trust in medical AI.",
    focus: ["Product development", "Clinical adoption", "Founder advising", "Strategic planning"],
  },
]

export function CurrentWork() {
  return (
    <section id="work" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Current Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {workAreas.map((area, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.focus.map((item) => (
                  <span key={item} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
