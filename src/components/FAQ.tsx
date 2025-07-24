import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "É fácil de fazer?",
      answer: "Sim! O método foi desenvolvido para ser simples e prático. Mesmo sem experiência na cozinha, você consegue fazer morangos perfeitos seguindo nosso passo a passo detalhado. A receita usa ingredientes básicos e não requer equipamentos especiais."
    },
    {
      question: "Quanto custa produzir cada morango?",
      answer: "O custo de produção varia entre R$ 0,80 a R$ 1,20 por morango, dependendo da região. Como você pode vender entre R$ 3,00 a R$ 5,00 cada, sua margem de lucro fica entre 200% a 400%!"
    },
    {
      question: "Posso vender em festas e eventos?",
      answer: "Absolutamente! Os morangos caramelizados são perfeitos para aniversários, casamentos, formaturas e qualquer evento. Muitas alunas começaram vendendo para amigos e hoje têm uma clientela fixa de eventos."
    },
    {
      question: "Recebo o acesso na hora?",
      answer: "Sim! Assim que seu pagamento for confirmado, você recebe o acesso completo ao curso por email. Pode começar a aprender imediatamente, mesmo que seja madrugada ou fim de semana."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeita, devolvemos 100% do seu dinheiro sem perguntas. Assumimos todo o risco para você."
    },
    {
      question: "Preciso de equipamentos especiais?",
      answer: "Não! Você provavelmente já tem tudo em casa: fogão, panela, colher de pau e espetos. Eventualmente, pode investir em uma panela antiaderente, mas não é obrigatório para começar."
    },
    {
      question: "Quanto tempo leva para aprender?",
      answer: "O curso completo tem aproximadamente 1 hora de conteúdo. Em poucas horas você já estará fazendo seus primeiros morangos. Com 1-2 dias de prática, você terá o resultado profissional."
    },
    {
      question: "Funciona para iniciantes?",
      answer: "Sim! O curso foi criado especialmente para quem nunca fez antes. Explicamos cada detalhe, desde como escolher os morangos até as técnicas profissionais de acabamento."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respostas para as perguntas mais comuns sobre o curso
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Seção de contato */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudar você a começar sua jornada de sucesso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>📧</span>
                <span>contato@morangodoamorgourmet.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>📱</span>
                <span>(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};