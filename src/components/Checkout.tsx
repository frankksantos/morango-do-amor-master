import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, CreditCard, Lock, Star, Clock } from "lucide-react";

export const Checkout = () => {
  const handlePurchase = () => {
    // Aqui você integraria com o sistema de pagamento
    alert("Redirecionando para o pagamento...");
  };

  const features = [
    "🍓 Método completo de morangos caramelizados",
    "📱 Acesso vitalício pelo celular",
    "🎁 5 bônus exclusivos (valor R$ 197)",
    "👥 Grupo VIP de alunas",
    "💬 Suporte direto comigo",
    "🛡️ Garantia de 7 dias"
  ];

  const paymentMethods = [
    "💳 Cartão de Crédito",
    "💰 PIX (desconto 5%)", 
    "🏦 Boleto Bancário",
    "💳 Débito Online"
  ];

  return (
    <section id="checkout" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🍓 Garanta seu <span className="text-primary">Acesso Agora!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforme sua vida financeira com o Morango do Amor Gourmet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Resumo do produto */}
            <Card className="p-8 shadow-2xl border-2 border-primary/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <Star className="w-4 h-4" />
                  OFERTA ESPECIAL
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Morango do Amor Gourmet
                </h3>
                <p className="text-muted-foreground">
                  Curso Completo + Bônus Exclusivos
                </p>
              </div>

              {/* Preço */}
              <div className="text-center mb-8">
                <div className="text-muted-foreground text-lg mb-2">
                  De: <span className="line-through">R$ 197,00</span>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  R$ 19,90
                </div>
                <p className="text-muted-foreground">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              {/* O que está incluído */}
              <div className="mb-8">
                <h4 className="font-bold text-lg text-foreground mb-4">
                  ✅ O que você vai receber:
                </h4>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgência */}
              <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <Clock className="w-5 h-5" />
                  <span>Promoção válida por tempo limitado!</span>
                </div>
              </div>
            </Card>

            {/* Formulário de pagamento */}
            <Card className="p-8 shadow-2xl">
              <div className="text-center mb-8">
                <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Finalizar Pedido
                </h3>
                <p className="text-muted-foreground">
                  Pagamento 100% seguro e protegido
                </p>
              </div>

              {/* Formas de pagamento */}
              <div className="mb-8">
                <h4 className="font-bold text-lg text-foreground mb-4">
                  💳 Escolha sua forma de pagamento:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="bg-muted/50 p-3 rounded-lg text-center text-sm font-medium">
                      {method}
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão principal */}
              <Button 
                variant="cta"
                size="xl"
                onClick={handlePurchase}
                className="w-full mb-6 text-xl py-6"
              >
                🛒 COMPRAR AGORA POR R$ 19,90
              </Button>

              {/* Garantias de segurança */}
              <div className="space-y-3 text-center text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  <span>Pagamento protegido com SSL 256 bits</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Garantia de 7 dias para reembolso</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Processado por uma empresa certificada</span>
                </div>
              </div>

              {/* Certificações */}
              <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-border">
                <div className="bg-muted/50 px-3 py-1 rounded text-xs font-medium">
                  🔒 SSL Seguro
                </div>
                <div className="bg-muted/50 px-3 py-1 rounded text-xs font-medium">
                  ✅ PCI Compliant
                </div>
                <div className="bg-muted/50 px-3 py-1 rounded text-xs font-medium">
                  🛡️ Anti-fraude
                </div>
              </div>
            </Card>
          </div>

          {/* Última chamada */}
          <div className="text-center mt-12">
            <div className="bg-primary text-primary-foreground p-6 rounded-xl max-w-2xl mx-auto">
              <h4 className="font-bold text-xl mb-2">
                ⚡ Últimas vagas com desconto!
              </h4>
              <p className="text-primary-foreground/90">
                Não perca a chance de começar sua renda extra hoje mesmo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};