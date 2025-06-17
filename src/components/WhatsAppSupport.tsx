
import { MessageCircle } from 'lucide-react';

const WhatsAppSupport = () => {
  const whatsappNumber = "5511963512105";
  const message = "Olá! Preciso de ajuda com o Extrator de Contatos.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
        title="Suporte via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline font-medium">Suporte</span>
      </a>
    </div>
  );
};

export default WhatsAppSupport;
