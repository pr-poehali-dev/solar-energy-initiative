export function HomeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl text-center space-y-6">
        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-2xl">
          VM
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
          VIGRY MUSIC
        </h1>
        
        <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Добро пожаловать на официальный сайт музыкального канала VIGRY MUSIC. 
          Здесь вы найдёте эксклюзивный контент, информацию о наших социальных сетях 
          и многое другое.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
            <div className="text-4xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground mt-2">Видео</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
            <div className="text-4xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground mt-2">Подписчиков</div>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all">
            <div className="text-4xl font-bold text-primary">5M+</div>
            <div className="text-sm text-muted-foreground mt-2">Просмотров</div>
          </div>
        </div>
      </div>
    </section>
  )
}
