import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isAuthenticated: boolean
}

export function Sidebar({ activeSection, setActiveSection, isAuthenticated }: SidebarProps) {
  const menuItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "socials", label: "Наши соцсети", icon: "Share2" },
    { id: "exclusive", label: "Эксклюзив", icon: "Lock" },
    { id: "about", label: "О канале", icon: "Info" },
  ]

  return (
    <aside className="w-20 lg:w-64 bg-card border-r border-border flex flex-col items-center lg:items-stretch p-4 space-y-4">
      <div className="mb-8 text-center lg:text-left">
        <h1 className="text-2xl font-bold text-primary hidden lg:block">VIGRY MUSIC</h1>
        <div className="text-2xl font-bold text-primary lg:hidden">VM</div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeSection === item.id ? "default" : "ghost"}
            className={`w-full justify-center lg:justify-start transition-all duration-200 ${
              activeSection === item.id 
                ? "bg-primary text-primary-foreground shadow-lg" 
                : "hover:bg-accent/50 text-foreground"
            }`}
            onClick={() => setActiveSection(item.id)}
          >
            <Icon name={item.icon} size={20} className="lg:mr-3" />
            <span className="hidden lg:inline">{item.label}</span>
          </Button>
        ))}
      </nav>

      {isAuthenticated && (
        <Button
          variant="outline"
          className="w-full justify-center lg:justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Icon name="Plus" size={20} className="lg:mr-3" />
          <span className="hidden lg:inline">Загрузить</span>
        </Button>
      )}
    </aside>
  )
}
