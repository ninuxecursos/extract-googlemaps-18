
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Phone } from 'lucide-react';
import ContactList from './ContactList';
import { parseContacts } from '@/utils/parseContacts';
import { toast } from '@/hooks/use-toast';

interface Contact {
  name: string;
  phone: string;
  type: 'WhatsApp' | 'Telefone';
}

const ContactExtractor = () => {
  const [inputText, setInputText] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleExtractContacts = () => {
    if (!inputText.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, cole o texto com os dados das empresas.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simular um pequeno delay para melhor UX
    setTimeout(() => {
      const extractedContacts = parseContacts(inputText);
      setContacts(extractedContacts);
      setIsProcessing(false);
      
      toast({
        title: "Sucesso!",
        description: `${extractedContacts.length} contatos extraídos com sucesso.`,
      });
    }, 500);
  };

  const handleClear = () => {
    setInputText('');
    setContacts([]);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Entrada de Dados
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Cole aqui os resultados de busca do diretório de empresas (ex: resultados do Google Maps com nomes, avaliações, endereços e telefones)..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] resize-none"
          />
          <div className="flex gap-3">
            <Button 
              onClick={handleExtractContacts}
              disabled={isProcessing}
              className="flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              {isProcessing ? 'Processando...' : 'Extrair Contatos'}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClear}
              disabled={isProcessing}
            >
              Limpar
            </Button>
          </div>
        </CardContent>
      </Card>

      {contacts.length > 0 && <ContactList contacts={contacts} />}
    </div>
  );
};

export default ContactExtractor;
