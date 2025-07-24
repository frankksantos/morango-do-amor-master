import { Shield, RefreshCw, Clock } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-16">
            <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              💸 Garantia <span className="text-primary">Incondicional</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Sua satisfação é nossa prioridade. Sem riscos para você!
            </p>
          </div>

          {/* Card principal da garantia */}
          <div className="bg-background border-4 border-primary rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full text-xl font-bold mb-6">
                  <Clock className="w-6 h-6" />
                  7 DIAS DE GARANTIA
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Se não gostar, devolvemos seu dinheiro
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Você tem <span className="font-bold text-primary">7 dias completos</span> para 
                  testar nosso método. Se por qualquer motivo não ficar satisfeita, 
                  devolvemos <span className="font-bold text-primary">100% do seu investimento</span> 
                  sem perguntas.
                </p>
              </div>

              {/* Benefícios da garantia */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <RefreshCw className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Reembolso Total</h4>
                  <p className="text-muted-foreground">100% do valor investido de volta</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Sem Pressa</h4>
                  <p className="text-muted-foreground">7 dias para testar com calma</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-xl">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Sem Burocracia</h4>
                  <p className="text-muted-foreground">Processo simples e rápido</p>
                </div>
              </div>

              {/* Como funciona */}
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold text-xl text-foreground mb-4 text-center">
                  Como funciona nossa garantia:
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-2">1</div>
                    <p className="text-sm text-muted-foreground">Faça seu pedido com segurança</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-2">2</div>
                    <p className="text-sm text-muted-foreground">Teste por 7 dias completos</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-2">3</div>
                    <p className="text-sm text-muted-foreground">Não gostou? Devolvemos tudo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque final */}
          <div className="text-center mt-12">
            <div className="inline-block bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl mb-2">
                🛡️ Assumimos todo o risco para você!
              </h4>
              <p className="text-accent-foreground/90">
                Sua única preocupação deve ser aprender e lucrar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};