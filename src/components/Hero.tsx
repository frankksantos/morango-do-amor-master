import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-strawberry.jpg";
import strawberriesDisplay from "@/assets/strawberries-display.jpg";
export const Hero = () => {
  const scrollToCheckout = () => {
    window.open('https://go.perfectpay.com.br/PPU38CPT2U9', '_blank');
  };
  return <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          {/* Título Principal */}
          <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-6 leading-tight px-2">
            🍓 Descubra o Segredo do<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Morango do Amor Gourmet!
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Aprenda a fazer morangos caramelizados que vendem sozinhos e podem te render até{" "}
            <span className="font-bold text-primary">R$3.000 por mês!</span>
          </p>
          
          {/* Vídeo de Vendas */}
          <div className="mb-8 max-w-4xl mx-auto px-4">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/svZipW4x_4g?rel=0&modestbranding=1&showinfo=0"
                title="Morango do Amor Gourmet - Vídeo de Vendas"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* CTA Principal */}
          <Button variant="hero" size="xl" onClick={scrollToCheckout} className="mb-12 shadow-xl">QUERO APRENDER
        </Button>
        </div>

        {/* Imagens em Destaque */}
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Mulher com Morango */}
          <div className="relative">
            <img src={heroImage} alt="Mulher sorrindo segurando morango caramelizado" className="w-full h-auto rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
              <span className="font-bold text-lg">💰 Até R$3.000/mês</span>
            </div>
          </div>
          
          {/* Morangos Prontos */}
          <div className="relative">
            <img src={strawberriesDisplay} alt="Morangos caramelizados gourmet" className="w-full h-auto rounded-2xl shadow-2xl" />
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg animate-pulse-glow">
              <span className="font-bold text-lg">✨ Resultado Profissional</span>
            </div>
          </div>
        </div>

        {/* Indicadores de Valor */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-card rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold text-sm">Receita Rápida</div>
          </div>
          <div className="text-center bg-card rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">💰</div>
            <div className="font-semibold text-sm">Alta Lucratividade</div>
          </div>
          <div className="text-center bg-card rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">🏠</div>
            <div className="font-semibold text-sm">Faça em Casa</div>
          </div>
          <div className="text-center bg-card rounded-xl p-6 shadow-lg">
            <div className="text-3xl mb-2">📈</div>
            <div className="font-semibold text-sm">Renda Extra</div>
          </div>
        </div>
      </div>
    </section>;
};