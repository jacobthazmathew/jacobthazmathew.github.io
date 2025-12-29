import { Card } from "@/components/ui/card"

const experiences = [
  {
    period: "Aug 2021 — Present",
    role: "Digital Health Consultant",
    company: "Synergy HR Consulting LLC",
    description:
      "Strategic consulting for digital health initiatives in Qatar, focusing on telemedicine, telehealth, and operations management. Delivering expert presentations and ensuring operational excellence in health technology implementation.",
    skills: ["Digital Health", "Telemedicine", "Operations Management", "Telehealth", "eHealth"],
  },
  {
    period: "Nov 2022 — Nov 2023",
    role: "Acting CEO / COO / CMO",
    company: "Droobi Health (Lillia)",
    description:
      "Held multiple executive leadership roles during a critical growth phase. Managed overall operations, clinical strategy, and product development for advanced digital health solutions in Doha, Qatar.",
    skills: ["Leadership", "Product Development", "Startups", "Project Management", "Digital Health"],
  },
  {
    period: "Jun 2013 — Aug 2021",
    role: "Emergency Medicine Physician & Assistant Registrar",
    company: "Ministry of Health Kuwait",
    description:
      "Provided high-acuity clinical care at Mubarak Al-Kabeer and Al-Adan Hospitals. Led emergency department operations and integrated digital health practices into clinical workflows.",
    skills: ["Clinical Care", "Emergency Medicine", "Digital Health", "Leadership", "eHealth"],
  },
  {
    period: "Nov 2012 — Jan 2013",
    role: "Research Assistant",
    company: "Global Emergency Care Collaborative",
    description:
      "Provided research support to an NGO developing emergency care infrastructures in rural Rukungiri, Uganda.",
    skills: ["Research", "Emergency Care", "Global Health", "Teamwork"],
  },
]

const affiliations = [
  {
    organization: "World Medical Association (WMA)",
    role: "Working Group & Taskforce Member",
    description:
      "Member of the Medical Technologies Working Group with a focus on AI's impact on healthcare. Previously served on the Protection of Medical Personnel and eHealth Taskforces.",
    period: "2020 — Present",
  },
  {
    organization: "American Heart Association",
    role: "BLS & ACLS Instructor",
    description:
      "Certified instructor for Basic Life Support and Advanced Cardiac Life Support, training hundreds of healthcare professionals in critical life-saving techniques.",
    period: "2012 — 2021",
  },
  {
    organization: "Junior Doctor Network",
    role: "Active Member",
    description:
      "Contributing to international discussions and advocacy for junior doctors globaly, focusing on leadership and medical education.",
    period: "2016 — 2021",
  },
  {
    organization: "IFMSA",
    role: "National & Local Officer of Medical Education",
    description:
      "Led medical education initiatives at Kuwait University, coordinating national programs and local student engagement.",
    period: "2008 — 2010",
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
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
          {affiliations.map((affiliation, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="text-sm text-muted-foreground min-w-[140px]">{affiliation.period}</div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{affiliation.organization}</h3>
                    <p className="text-sm text-accent">{affiliation.role}</p>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{affiliation.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
