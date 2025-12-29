const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Figma", "CI/CD", "Agile"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground/80">
                    {skill}
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
