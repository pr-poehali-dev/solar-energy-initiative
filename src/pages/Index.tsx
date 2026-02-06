import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { HomeSection } from "../components/HomeSection"
import { SocialsSection } from "../components/SocialsSection"
import { ExclusiveSection } from "../components/ExclusiveSection"
import { AboutSection } from "../components/AboutSection"

export default function Index() {
  const [activeSection, setActiveSection] = useState("home")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <main className="min-h-screen flex bg-background">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isAuthenticated={isAuthenticated}
      />
      <div className="flex-1 overflow-y-auto">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "socials" && <SocialsSection />}
        {activeSection === "exclusive" && (
          <ExclusiveSection 
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}
        {activeSection === "about" && <AboutSection />}
      </div>
    </main>
  )
}
