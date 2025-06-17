
import { useState } from "react";
import ContactExtractor from "@/components/ContactExtractor";
import WhatsAppSupport from "@/components/WhatsAppSupport";
import PixDonationModal from "@/components/PixDonationModal";
import SeoContent from "@/components/SeoContent";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Index = () => {
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Header com botão PIX */}
      <div className="bg-gray-900 py-2">
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
      <div className="bg-gradient-to-br from-gray-700 to-gray-900">
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
          <ContactExtractor />
        </div>
      </div>

      {/* Conteúdo SEO */}
      <SeoContent />

      {/* Componentes fixos */}
      <WhatsAppSupport />
      <PixDonationModal 
        isOpen={isPixModalOpen} 
        onClose={() => setIsPixModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
