import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CurrentWork } from "@/components/current-work"
import { FocusAreas } from "@/components/focus-areas"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <CurrentWork />
        <FocusAreas />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
