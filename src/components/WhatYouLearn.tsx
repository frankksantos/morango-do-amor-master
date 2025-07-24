import { BookOpen, Gift, Star, Target } from "lucide-react";

export const WhatYouLearn = () => {
  const modules = [
    {
      icon: "🍓",
      title: "Como fazer o ponto perfeito do caramelo",
      description: "O segredo para um caramelo que fica brilhante como vidro e não gruda nos dentes",
      duration: "15 min"
    },
    {
      icon: "🧊", 
      title: "Como deixar o morango brilhando como vidro",
      description: "Técnica profissional para o acabamento perfeito que impressiona qualquer cliente",
      duration: "10 min"
    },
    {
      icon: "📦",
      title: "Como embalar e vender mais",
      description: "Estratégias de apresentação que aumentam o valor percebido e facilitam a venda",
      duration: "12 min"
    },
    {
      icon: "🎁",
      title: "Bônus: Ideias de precificação e embalagens",
      description: "Planilha de custos, sugestões de preços e modelos de embalagens profissionais",
      duration: "Extra"
    }
  ];

  const bonuses = [
    "📊 Planilha de Controle de Custos e Lucros",
    "🎨 Templates de Embalagens para Impressão", 
    "📱 Guia de Marketing para Redes Sociais",
    "💡 50 Ideias de Variações do Produto",
    "👥 Acesso ao Grupo VIP de Alunas"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método completo e testado para dominar a arte dos morangos caramelizados
          </p>
        </div>

        {/* Módulos Principais */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid gap-6">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border"
              >
                <div className="text-4xl flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  {module.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {module.title}
                    </h3>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {module.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bônus Especiais */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-2xl border border-accent/20">
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Bônus Exclusivos Inclusos
              </h3>
              <p className="text-muted-foreground text-lg">
                Valor extra de <span className="line-through">R$ 197</span> - 
                <span className="text-accent font-bold"> GRÁTIS hoje!</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Destaque de Valor */}
        <div className="text-center mt-16">
          <div className="inline-block bg-primary text-primary-foreground p-6 rounded-2xl">
            <Target className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">
              Tudo por apenas R$ 19,90
            </h3>
            <p className="text-primary-foreground/90">
              Menos que o custo de 2 morangos em uma confeitaria!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};