
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowDown, Copy, FileText, MousePointer } from 'lucide-react';

const QuickGuide = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Pesquise no Google Maps",
      description: "Pesquise o tipo de empresa e bairro. Ex: \"Instrumentos musicais campinas\"",
      color: "text-blue-500",
      borderColor: "border-blue-300"
    },
    {
      number: 2,
      icon: ArrowDown,
      title: "Role para baixo",
      description: "Role tudo para baixo para carregar todas as empresas",
      color: "text-green-500",
      borderColor: "border-green-300"
    },
    {
      number: 3,
      icon: Copy,
      title: "Copie o conteúdo",
      description: "Aperte \"Ctrl+A\" e depois \"Ctrl+C\" para copiar",
      color: "text-amber-500",
      borderColor: "border-amber-300"
    },
    {
      number: 4,
      icon: FileText,
      title: "Cole no extrator",
      description: "Cole no campo \"Entrada de dados\" aqui no extrator",
      color: "text-purple-500",
      borderColor: "border-purple-300"
    },
    {
      number: 5,
      icon: MousePointer,
      title: "Extraia os contatos",
      description: "Clique em \"Extrair contatos\" e pronto!",
      color: "text-red-500",
      borderColor: "border-red-300"
    }
  ];

  return (
    <Card className="shadow-lg bg-white/90 backdrop-blur-sm border-2 border-gray-300">
      <CardHeader className="text-center pb-2">
        <CardTitle className="flex items-center justify-center gap-2 text-base font-bold text-gray-800">
          <Search className="h-4 w-4 text-blue-500" />
          Guia Rápido - Como Usar
        </CardTitle>
        <p className="text-gray-600 text-xs">Siga estes 5 passos simples</p>
      </CardHeader>
      <CardContent className="px-3 pb-3">
        {/* Grid com 3 colunas e 2 linhas */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {/* Primeira linha - 3 passos */}
          {steps.slice(0, 3).map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className={`flex flex-col items-center gap-1 p-2 rounded border-2 ${step.borderColor} hover:shadow-sm transition-all duration-200`}>
                {/* Número do passo */}
                <div className={`flex-shrink-0 w-6 h-6 ${step.color.replace('text-', 'bg-').replace('-500', '-500')} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                  {step.number}
                </div>
                
                {/* Ícone e título */}
                <div className="flex flex-col items-center gap-1">
                  <IconComponent className={`h-3 w-3 ${step.color}`} />
                  <h3 className="font-semibold text-xs text-gray-800 text-center leading-tight">{step.title}</h3>
                </div>
                
                {/* Descrição */}
                <p className="text-gray-600 text-xs text-center leading-tight">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Segunda linha - 2 passos centralizados */}
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          {steps.slice(3, 5).map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className={`flex flex-col items-center gap-1 p-2 rounded border-2 ${step.borderColor} hover:shadow-sm transition-all duration-200`}>
                {/* Número do passo */}
                <div className={`flex-shrink-0 w-6 h-6 ${step.color.replace('text-', 'bg-').replace('-500', '-500')} rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                  {step.number}
                </div>
                
                {/* Ícone e título */}
                <div className="flex flex-col items-center gap-1">
                  <IconComponent className={`h-3 w-3 ${step.color}`} />
                  <h3 className="font-semibold text-xs text-gray-800 text-center leading-tight">{step.title}</h3>
                </div>
                
                {/* Descrição */}
                <p className="text-gray-600 text-xs text-center leading-tight">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Dica final compacta */}
        <div className="mt-3 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded border border-blue-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-sm">💡</div>
            <h4 className="font-semibold text-blue-800 text-xs">Dica</h4>
          </div>
          <p className="text-blue-700 text-xs">
            Quanto mais empresas carregar, mais contatos o extrator encontrará!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickGuide;
