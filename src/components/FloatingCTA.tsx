import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Mostra o botão após rolar um pouco
      if (scrollPosition > windowHeight * 0.5 && !isHidden) {
        setIsVisible(true);
      } else if (scrollPosition <= windowHeight * 0.3) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);

  const scrollToCheckout = () => {
    window.open('https://go.perfectpay.com.br/PPU38CPT2U9', '_blank');
  };

  const handleHide = () => {
    setIsHidden(true);
    setIsVisible(false);
  };

  if (!isVisible || isHidden) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-sm mx-auto bg-gradient-to-r from-primary to-accent text-white p-4 rounded-2xl shadow-2xl border-2 border-white/20">
        {/* Botão fechar */}
        <button
          onClick={handleHide}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="text-lg font-bold mb-2">
            🍓 Oferta Especial!
          </div>
          <div className="text-2xl font-bold mb-1">
            R$ 19,90
          </div>
          <div className="text-sm text-white/80 mb-3">
            Aprenda agora e fature até R$3.000/mês
          </div>
          <Button 
            onClick={scrollToCheckout}
            variant="secondary"
            size="sm"
            className="w-full font-bold"
          >
            GARANTIR ACESSO
          </Button>
        </div>
      </div>
    </div>
  );
};