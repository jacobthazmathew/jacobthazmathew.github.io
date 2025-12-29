import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Frontend Engineer",
    company: "Tech Company",
    description:
      "Build and maintain critical components used to construct user-facing products. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Developer",
    company: "Digital Agency",
    description:
      "Developed and shipped highly interactive web applications for clients. Collaborated with designers and backend developers to deliver polished, production-ready experiences.",
    technologies: ["JavaScript", "Vue.js", "Node.js", "CSS"],
  },
  {
    period: "2019 — 2021",
    role: "Junior Developer",
    company: "Startup Inc",
    description:
      "Started my career building features for a fast-growing startup. Learned modern development practices and contributed to multiple product launches.",
    technologies: ["React", "Redux", "Express", "MongoDB"],
  },
]

const affiliations = [
  {
    organization: "World Medical Association",
    role: "Member & Policy Contributor",
    description:
      "Contributing to international medical policy discussions and guidelines for AI implementation in healthcare. Focus on ethical standards and clinical safety.",
  },
  {
    organization: "University of Pittsburgh",
    role: "Academic Affiliate",
    description:
      "Research collaboration on healthcare AI, digital health innovation, and medical education initiatives for emerging technologies.",
  },
  {
    organization: "Synergy Consulting",
    role: "Founder & Principal Consultant",
    description:
      "Digital health consulting practice advising health tech startups, healthcare organizations, and innovation teams on clinical validity, AI safety, and strategic implementation.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Affiliations & Professional Roles
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="text-sm text-muted-foreground min-w-[140px]">{exp.period}</div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
          {affiliations.map((affiliation, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{affiliation.organization}</h3>
                  <p className="text-sm text-accent">{affiliation.role}</p>
                </div>
                <p className="text-foreground/80 leading-relaxed">{affiliation.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
