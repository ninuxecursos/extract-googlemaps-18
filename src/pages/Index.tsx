
import ContactExtractor from "@/components/ContactExtractor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Extrator de Contatos Empresariais
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cole resultados de busca de diretórios empresariais e extraia automaticamente 
            nomes, telefones e identifique números WhatsApp
          </p>
        </div>
        <ContactExtractor />
      </div>
    </div>
  );
};

export default Index;
