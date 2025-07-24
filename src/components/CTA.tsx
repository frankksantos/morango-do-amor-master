import { Button } from "@/components/ui/button";
import { Clock, TrendingUp } from "lucide-react";

export const CTA = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary-glow relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Alerta de urgência */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">⚠️ Promoção por tempo limitado</span>
          </div>

          {/* Título principal */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Última Chance de Garantir<br />
            <span className="text-yellow-300">Seu Acesso por R$19,90!</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Não perca a oportunidade de transformar uma receita simples em uma{" "}
            <span className="font-bold text-yellow-300">fonte de renda mensal</span>
          </p>

          {/* Benefícios rápidos */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Acesso Imediato</h3>
              <p className="text-white/80">Comece a aprender agora mesmo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-lg mb-2">Retorno Garantido</h3>
              <p className="text-white/80">Recupere o investimento no 1º dia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Método Comprovado</h3>
              <p className="text-white/80">+500 alunas já faturando</p>
            </div>
          </div>

          {/* Botão principal */}
          <Button 
            variant="hero"
            size="xl"
            onClick={scrollToCheckout}
            className="bg-white text-primary hover:bg-yellow-50 shadow-2xl text-2xl py-8 px-12 mb-6"
          >
            🍓 GARANTIR MEU ACESSO AGORA
          </Button>

          {/* Garantias */}
          <div className="text-white/80 text-lg">
            <p className="mb-2">✅ Pagamento 100% Seguro</p>
            <p>✅ Acesso Vitalício • ✅ Suporte Incluído</p>
          </div>
        </div>
      </div>
    </section>
  );
};