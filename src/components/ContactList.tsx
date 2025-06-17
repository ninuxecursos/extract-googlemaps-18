
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Phone, MessageCircle, Copy, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { formatPhoneToInternational } from '@/utils/parseContacts';

interface Contact {
  name: string;
  phone: string;
  type: 'WhatsApp' | 'Telefone';
}

interface ContactListProps {
  contacts: Contact[];
}

const ContactList = ({ contacts }: ContactListProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Texto copiado para a área de transferência.",
    });
  };

  const exportContacts = () => {
    const csvContent = "Nome da Empresa,Telefone,Tipo\n" + 
      contacts.map(contact => `"${contact.name}","${contact.phone}","${contact.type}"`).join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'contatos_extraidos.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Exportado!",
      description: "Contatos exportados para arquivo CSV.",
    });
  };

  const formatAllContactsInternational = () => {
    return contacts.map(contact => formatPhoneToInternational(contact.phone)).join('\n');
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Contatos Extraídos ({contacts.length})
          </CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => copyToClipboard(formatAllContactsInternational())}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copiar Todos
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={exportContacts}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Exportar CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold text-gray-800">{contact.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {contact.type === 'WhatsApp' ? (
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Phone className="h-4 w-4 text-blue-600" />
                    )}
                    <span className="font-mono text-gray-700">{contact.phone}</span>
                    <Badge 
                      variant={contact.type === 'WhatsApp' ? 'default' : 'secondary'}
                      className={contact.type === 'WhatsApp' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {contact.type}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(`${contact.name} - ${contact.phone} (${contact.type})`)}
                  className="ml-2"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactList;
