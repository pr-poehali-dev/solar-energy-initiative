import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function SocialsSection() {
  const socials = [
    {
      name: "Telegram",
      icon: "Send",
      description: "Подпишитесь на наш Telegram канал для получения последних новостей и эксклюзивного контента",
      link: "#",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "VK Видео",
      icon: "Video",
      description: "Смотрите все наши видео на платформе VK Видео",
      link: "#",
      color: "from-blue-700 to-indigo-700"
    },
    {
      name: "VK Сообщество",
      icon: "Users",
      description: "Присоединяйтесь к нашему сообществу ВКонтакте",
      link: "#",
      color: "from-indigo-600 to-purple-600"
    }
  ]

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Наши социальные сети</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Следите за нами в социальных сетях, чтобы не пропустить новые релизы и эксклюзивный контент
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social) => (
            <Card 
              key={social.name} 
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center mb-4`}>
                  <Icon name={social.icon} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">{social.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {social.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    Перейти
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
