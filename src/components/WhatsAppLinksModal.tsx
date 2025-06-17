
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Copy, MessageCircle, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { formatPhoneToInternational } from '@/utils/parseContacts';

interface Contact {
  name: string;
  phone: string;
  type: 'WhatsApp' | 'Telefone';
}

interface WhatsAppLinksModalProps {
  contacts: Contact[];
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppLinksModal = ({ contacts, isOpen, onClose }: WhatsAppLinksModalProps) => {
  const [message, setMessage] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState('');

  const generateWhatsAppLinks = () => {
    const links = contacts.map(contact => {
      const internationalPhone = formatPhoneToInternational(contact.phone).replace('+', '');
      const baseUrl = `https://wa.me/${internationalPhone}`;
      
      if (message.trim()) {
        return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
      }
      
      return `${baseUrl}/`;
    });
    
    const linksText = links.join('\n');
    setGeneratedLinks(linksText);
    
    toast({
      title: "Links gerados!",
      description: `${links.length} links do WhatsApp foram gerados.`,
    });
  };

  const copyLinksToClipboard = () => {
    if (generatedLinks) {
      navigator.clipboard.writeText(generatedLinks);
      toast({
        title: "Copiado!",
        description: "Links copiados para a área de transferência.",
      });
    }
  };

  const handleClose = () => {
    setMessage('');
    setGeneratedLinks('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              Gerar Links do WhatsApp
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Input
              id="message"
              placeholder="Ex: Oii, boa tarde"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="text-sm text-gray-500">
              Se incluir uma mensagem, ela será adicionada automaticamente em todos os links.
            </p>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={generateWhatsAppLinks}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4" />
              Gerar Links ({contacts.length} contatos)
            </Button>
            
            {generatedLinks && (
              <Button 
                variant="outline" 
                onClick={copyLinksToClipboard}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copiar Links
              </Button>
            )}
          </div>

          {generatedLinks && (
            <div className="space-y-2">
              <Label>Links Gerados:</Label>
              <Textarea
                value={generatedLinks}
                readOnly
                className="min-h-[200px] font-mono text-sm bg-gray-50"
              />
              <p className="text-sm text-gray-500">
                {contacts.length} links gerados • {message ? 'Com mensagem personalizada' : 'Sem mensagem'}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppLinksModal;
