export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
            Jacob Mathew, MD
          </h1>
          <p className="text-xl md:text-2xl text-accent font-light">
            Physician | Digital Health Consultant | AI in Healthcare Researcher
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            Bridging healthcare and technology at the intersection of clinical care, digital health, and artificial
            intelligence. Translating real clinical problems into practical, ethical, and safe technology solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
