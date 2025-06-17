
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Heart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import QRCode from 'qrcode';

interface PixDonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PixDonationModal = ({ isOpen, onClose }: PixDonationModalProps) => {
  const pixKey = "3daa2ff7-400c-43e9-8205-ba51e9c9c2fb";
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      // Gerar QR Code quando o modal abrir
      QRCode.toDataURL(pixKey, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
      .then((url) => {
        setQrCodeUrl(url);
      })
      .catch((err) => {
        console.error('Erro ao gerar QR Code:', err);
      });
    }
  }, [isOpen, pixKey]);

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
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Apoie este projeto
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Esta ferramenta é gratuita para todos. Se ela te ajudou, considere fazer uma doação via PIX:
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="flex items-center justify-center">
              {qrCodeUrl ? (
                <img 
                  src={qrCodeUrl} 
                  alt="QR Code PIX" 
                  className="w-48 h-48"
                />
              ) : (
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Gerando QR Code...</span>
                </div>
              )}
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
