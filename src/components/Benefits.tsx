import { CheckCircle } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: "✅",
      title: "Receita simples, com poucos ingredientes",
      description: "Você não precisa ser chef para fazer morangos incríveis"
    },
    {
      icon: "✅", 
      title: "Ideal para vender e faturar em festas e eventos",
      description: "Produto perfeito para qualquer ocasião especial"
    },
    {
      icon: "✅",
      title: "Baixo custo de produção, alto valor percebido", 
      description: "Margem de lucro que pode chegar a 300%"
    },
    {
      icon: "✅",
      title: "Comece com o que você já tem em casa",
      description: "Não precisa investir em equipamentos caros"
    },
    {
      icon: "✅",
      title: "Pode render até R$3.000 por mês",
      description: "Transforme uma habilidade em renda extra real"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher o <span className="text-primary">Morango do Amor Gourmet?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais que uma receita, é o seu caminho para uma renda extra consistente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="text-2xl flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destaque especial */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            🎯 Resultado Garantido em 24 Horas!
          </h3>
          <p className="text-white/90 text-lg">
            Siga nosso passo a passo e tenha seus primeiros morangos perfeitos no mesmo dia
          </p>
        </div>
      </div>
    </section>
  );
};