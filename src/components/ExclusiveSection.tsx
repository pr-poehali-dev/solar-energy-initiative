import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"
import { useToast } from "@/hooks/use-toast"

interface ExclusiveSectionProps {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

export function ExclusiveSection({ isAuthenticated, setIsAuthenticated }: ExclusiveSectionProps) {
  const [password, setPassword] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const exclusiveVideos = [
    { id: 1, title: "Эксклюзивное видео #1", views: 1234 },
    { id: 2, title: "Закрытый контент #2", views: 2341 },
    { id: 3, title: "Специальный выпуск #3", views: 3456 },
    { id: 4, title: "Бэкстейдж #4", views: 4567 },
  ]

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "vigry music") {
      setIsAuthenticated(true)
      setIsDialogOpen(false)
      toast({
        title: "Доступ получен!",
        description: "Добро пожаловать в эксклюзивный раздел",
      })
    } else {
      toast({
        variant: "destructive",
        title: "Неверный пароль",
        description: "Попробуйте ещё раз",
      })
    }
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center p-8">
        <Card className="max-w-md w-full bg-card border-border">
          <CardHeader className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Icon name="Lock" size={40} className="text-primary" />
            </div>
            <CardTitle className="text-3xl text-foreground">Эксклюзивный контент</CardTitle>
            <CardDescription className="text-muted-foreground">
              Этот раздел защищён паролем. Введите пароль для доступа к эксклюзивным материалам.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="bg-background border-border text-foreground"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Войти
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Эксклюзивный контент</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Специальные материалы только для наших зрителей
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Icon name="Plus" size={20} className="mr-2" />
                Добавить видео
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border">
              <DialogHeader>
                <DialogTitle className="text-foreground">Загрузка видео</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Эта функция будет доступна позже
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusiveVideos.map((video) => (
            <Card 
              key={video.id} 
              className="bg-card border-border hover:border-primary transition-all cursor-pointer group"
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <Icon name="Play" size={64} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{video.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Eye" size={16} className="mr-2" />
                    {video.views.toLocaleString()} просмотров
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
