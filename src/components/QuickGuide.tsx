
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
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      number: 2,
      icon: ArrowDown,
      title: "Role para baixo",
      description: "Role tudo para baixo para carregar todas as empresas",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      number: 3,
      icon: Copy,
      title: "Copie o conteúdo",
      description: "Aperte \"Ctrl+A\" e depois \"Ctrl+C\" para copiar",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      number: 4,
      icon: FileText,
      title: "Cole no extrator",
      description: "Cole no campo \"Entrada de dados\" aqui no extrator",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      number: 5,
      icon: MousePointer,
      title: "Extraia os contatos",
      description: "Clique em \"Extrair contatos\" e pronto!",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <Card className="shadow-lg bg-white/80 backdrop-blur-sm border-2 border-gray-200">
      <CardHeader className="text-center pb-3">
        <CardTitle className="flex items-center justify-center gap-2 text-lg font-bold text-gray-800">
          <Search className="h-5 w-5 text-blue-500" />
          Guia Rápido - Como Usar
        </CardTitle>
        <p className="text-gray-600 text-sm">Siga estes 5 passos simples</p>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="grid gap-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Linha conectora menor */}
                {index < steps.length - 1 && (
                  <div className="absolute left-4 top-10 w-0.5 h-6 bg-gray-300"></div>
                )}
                
                <div className={`flex items-center gap-3 p-3 rounded-lg border-2 ${step.borderColor} hover:shadow-md transition-all duration-200`}>
                  {/* Número do passo menor */}
                  <div className={`flex-shrink-0 w-8 h-8 ${step.color.replace('text-', 'bg-').replace('-500', '-500')} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                    {step.number}
                  </div>
                  
                  {/* Conteúdo compacto */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <IconComponent className={`h-4 w-4 ${step.color}`} />
                      <h3 className="font-semibold text-sm text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Dica final compacta */}
        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-lg">💡</div>
            <h4 className="font-semibold text-blue-800 text-sm">Dica</h4>
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
