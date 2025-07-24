import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonialImage from "@/assets/testimonial-woman.jpg";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      image: testimonialImage,
      text: "Eu vendi no primeiro dia e já recuperei o valor do curso! Os morangos ficaram perfeitos e todo mundo queria saber onde comprar mais.",
      earnings: "R$ 450 no primeiro fim de semana",
      rating: 5
    },
    {
      name: "Ana Costa", 
      image: testimonialImage,
      text: "Ninguém acredita que é feito em casa! A qualidade ficou igual aos de confeitaria profissional. Já tenho clientes fixos.",
      earnings: "R$ 1.200 no primeiro mês",
      rating: 5
    },
    {
      name: "Carla Mendes",
      image: testimonialImage, 
      text: "Faturei R$980 no primeiro fim de semana! Levei para uma festa de aniversário e saí de lá com encomendas para toda semana.",
      earnings: "R$ 2.800 em 3 semanas",
      rating: 5
    },
    {
      name: "Juliana Santos",
      image: testimonialImage,
      text: "O curso é muito prático e fácil de seguir. Em 2 horas já estava fazendo morangos de qualidade profissional!",
      earnings: "R$ 750 na primeira semana",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossas <span className="text-primary">alunas dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de pessoas que transformaram suas vidas com o Morango do Amor Gourmet
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrossel Principal */}
          <div className="bg-background rounded-2xl shadow-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Foto da pessoa */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl"
                />
              </div>
              
              {/* Conteúdo do depoimento */}
              <div className="flex-1 text-center md:text-left">
                {/* Estrelas */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Depoimento */}
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                {/* Nome e ganhos */}
                <div>
                  <cite className="text-xl font-bold text-primary not-italic">
                    {testimonials[currentTestimonial].name}
                  </cite>
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full inline-block mt-2 font-semibold">
                    💰 {testimonials[currentTestimonial].earnings}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles de navegação */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Indicadores */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Destaque adicional */}
        <div className="text-center mt-16">
          <div className="bg-primary text-primary-foreground p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">
              📊 Média de Ganhos das Nossas Alunas
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Entre <span className="font-bold">R$ 800 a R$ 3.000</span> por mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};