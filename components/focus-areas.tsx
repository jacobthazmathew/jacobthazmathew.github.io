const focusAreas = [
  {
    category: "AI & Technology",
    areas: ["Clinical AI Safety", "Explainable AI", "AI Governance", "Augmented Intelligence"],
  },
  {
    category: "Healthcare Strategy",
    areas: ["Digital Health Strategy", "Workflow Integration", "Clinician Adoption", "Healthcare Regulation"],
  },
  {
    category: "Innovation & Ethics",
    areas: ["Patient-Centered Innovation", "Ethical Implementation", "Technology Assessment", "Clinical Validation"],
  },
]

export function FocusAreas() {
  return (
    <section id="focus" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              <ul className="space-y-2">
                {category.areas.map((area) => (
                  <li key={area} className="text-foreground/80 leading-relaxed">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
