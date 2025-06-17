
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Heart, X, QrCode } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PixDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PixDonationModal = ({ isOpen, onClose }: PixDonationModalProps) => {
  const pixKey = "3daa2ff7-400c-43e9-8205-ba51e9c9c2fb";

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para a área de transferência.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Apoie este projeto
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Esta ferramenta é gratuita para todos. Se ela te ajudou, considere fazer uma doação via PIX:
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="flex items-center justify-center">
              <QrCode className="h-24 w-24 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500">
              Escaneie o QR Code ou copie a chave PIX abaixo
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded border">
              <p className="text-sm font-mono break-all">{pixKey}</p>
            </div>
            
            <Button 
              onClick={copyPixKey}
              className="w-full flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copiar Chave PIX
            </Button>
          </div>

          <p className="text-xs text-gray-500">
            Qualquer valor é muito bem-vindo e ajuda a manter esta ferramenta gratuita! 💙
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PixDonationModal;
