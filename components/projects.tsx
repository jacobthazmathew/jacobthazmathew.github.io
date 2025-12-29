import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "AI Safety Evaluation Framework",
    description:
      "Structured framework for evaluating healthcare AI systems across clinical validity, safety, explainability, and workflow integration. Used by health tech startups and healthcare organizations.",
    status: "Active",
    focus: ["Clinical validation", "Safety assessment", "Regulatory readiness"],
  },
  {
    title: "Clinical AI Documentation System",
    description:
      "Documentation and decision support tool designed to reduce clinician burden while maintaining clinical accuracy. Emphasizes explainability and integration with existing workflows.",
    status: "In Development",
    focus: ["Clinical decision support", "Workflow integration", "Explainable AI"],
  },
  {
    title: "Healthcare AI Governance Guidelines",
    description:
      "Comprehensive guidelines for ethical implementation and governance of AI systems in healthcare settings. Developed in collaboration with international medical policy organizations.",
    status: "Published",
    focus: ["AI governance", "Ethical implementation", "Policy frameworks"],
  },
  {
    title: "Patient-Centered AI Interface",
    description:
      "Patient-facing application leveraging AI to improve health literacy and care engagement. Built with emphasis on trust, transparency, and accessibility.",
    status: "Pilot Phase",
    focus: ["Patient engagement", "Health literacy", "Trust & transparency"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <span className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full whitespace-nowrap">
                  {project.status}
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.focus.map((item) => (
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
