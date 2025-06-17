
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowDown, Copy, FileText, MousePointer } from 'lucide-react';

const QuickGuide = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Pesquise no Google Maps",
      description: "Pesquise o tipo de empresa e bairro no Google Maps. Exemplo: \"Instrumentos musicais campinas\"",
      color: "text-blue-400"
    },
    {
      number: 2,
      icon: ArrowDown,
      title: "Role para baixo",
      description: "Role tudo para baixo para carregar todas as empresas da região",
      color: "text-green-400"
    },
    {
      number: 3,
      icon: Copy,
      title: "Copie o conteúdo",
      description: "Aperte no teclado \"Ctrl+A\" e depois \"Ctrl+C\" para copiar todo o conteúdo",
      color: "text-yellow-400"
    },
    {
      number: 4,
      icon: FileText,
      title: "Cole no extrator",
      description: "Cole o conteúdo no campo de \"Entrada de dados\" aqui no extrator",
      color: "text-purple-400"
    },
    {
      number: 5,
      icon: MousePointer,
      title: "Extraia os contatos",
      description: "Clique em \"Extrair contatos\" e pronto! Os contatos serão organizados automaticamente",
      color: "text-red-400"
    }
  ];

  return (
    <Card className="shadow-lg bg-white/95 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-center">
          <Search className="h-6 w-6 text-blue-500" />
          Guia Rápido - Como Usar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className={`h-5 w-5 ${step.color}`} />
                    <h3 className="font-semibold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            💡 <strong>Dica:</strong> Quanto mais empresas você carregar no Google Maps, mais contatos o extrator conseguirá identificar!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickGuide;
