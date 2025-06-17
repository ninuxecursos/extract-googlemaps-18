
import { useState } from "react";
import ContactExtractor from "@/components/ContactExtractor";
import PixDonationModal from "@/components/PixDonationModal";
import SeoContent from "@/components/SeoContent";
import QuickGuide from "@/components/QuickGuide";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Index = () => {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background criativo com gradientes e formas geométricas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Formas geométricas animadas */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Círculos grandes com blur */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-40 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Formas geométricas menores */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-cyan-400/10 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-emerald-400/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-yellow-400/10 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '2s' }}></div>
          
          {/* Linhas diagonais sutis */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12 origin-bottom"></div>
            <div className="absolute top-0 left-20 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12 origin-bottom"></div>
            <div className="absolute top-0 left-40 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform rotate-12 origin-bottom"></div>
          </div>
          
          {/* Grade sutil */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>
      </div>

      {/* Header com botão PIX */}
      <div className="bg-black/30 backdrop-blur-sm py-3 relative z-10 border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPixModalOpen(true)}
            className="text-gray-300 hover:text-white hover:bg-white/10 text-xs backdrop-blur-sm"
          >
            <Heart className="h-3 w-3 mr-1" />
            Doar via PIX
          </Button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/c395320d-920e-4f1c-81e6-10118c9484d4.png" 
                alt="Sanchez Logo" 
                className="w-[350px] h-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Extrator de Contatos Empresariais
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-md">
              Cole resultados de busca de diretórios empresariais e extraia automaticamente 
              nomes, telefones e identifique números WhatsApp
            </p>
          </div>
          
          {/* Guia Rápido */}
          <div className="mb-8">
            <QuickGuide />
          </div>
          
          <ContactExtractor />
        </div>
      </div>

      {/* Conteúdo SEO */}
      <div className="relative z-10">
        <SeoContent />
      </div>

      {/* Modal PIX */}
      <PixDonationModal 
        isOpen={isPixModalOpen} 
        onClose={() => setIsPixModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
