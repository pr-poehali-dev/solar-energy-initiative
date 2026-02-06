import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function AboutSection() {
  return (
    <section className="min-h-screen p-8 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Немного о канале</h2>
          <p className="text-lg text-muted-foreground">
            Узнайте больше о нашей истории и миссии
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="History" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">История канала</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    VIGRY MUSIC начал свой путь как небольшой проект энтузиастов, увлечённых музыкой. 
                    С годами мы выросли в полноценный музыкальный канал, предоставляющий качественный 
                    контент нашим зрителям. Сегодня мы гордимся тем, что стали частью жизни тысяч людей, 
                    которые ценят хорошую музыку.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Наша миссия</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Music" size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <span>Предоставлять качественный музыкальный контент для наших зрителей</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Users" size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <span>Создавать сообщество единомышленников, объединённых любовью к музыке</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Sparkles" size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <span>Открывать новые таланты и поддерживать начинающих артистов</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="TrendingUp" size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <span>Постоянно развиваться и улучшать качество контента</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Контакты</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center">
                      <Icon name="AtSign" size={18} className="mr-3 text-primary" />
                      <span>Email: contact@vigrymusic.com</span>
                    </p>
                    <p className="flex items-center">
                      <Icon name="MessageCircle" size={18} className="mr-3 text-primary" />
                      <span>Для сотрудничества: partnership@vigrymusic.com</span>
                    </p>
                    <p className="text-sm mt-4 italic">
                      Мы всегда открыты для предложений и сотрудничества. Свяжитесь с нами, 
                      и мы обязательно ответим!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
