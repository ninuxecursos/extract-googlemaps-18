
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
    <div className="min-h-screen bg-gray-800 relative overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '8s' }}></div>
      </div>

      {/* Header com botão PIX */}
      <div className="bg-gray-900 py-2 relative z-10">
        <div className="container mx-auto px-4 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPixModalOpen(true)}
            className="text-gray-300 hover:text-white hover:bg-gray-700 text-xs"
          >
            <Heart className="h-3 w-3 mr-1" />
            Doar via PIX
          </Button>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="bg-gradient-to-br from-gray-700/80 to-gray-900/80 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/c395320d-920e-4f1c-81e6-10118c9484d4.png" 
                alt="Sanchez Logo" 
                className="w-[350px] h-auto"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Extrator de Contatos Empresariais
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
