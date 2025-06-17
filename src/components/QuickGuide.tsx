
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
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      number: 2,
      icon: ArrowDown,
      title: "Role para baixo",
      description: "Role tudo para baixo para carregar todas as empresas da região",
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      number: 3,
      icon: Copy,
      title: "Copie o conteúdo",
      description: "Aperte no teclado \"Ctrl+A\" e depois \"Ctrl+C\" para copiar todo o conteúdo",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      number: 4,
      icon: FileText,
      title: "Cole no extrator",
      description: "Cole o conteúdo no campo de \"Entrada de dados\" aqui no extrator",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      number: 5,
      icon: MousePointer,
      title: "Extraia os contatos",
      description: "Clique em \"Extrair contatos\" e pronto! Os contatos serão organizados automaticamente",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];

  return (
    <Card className="shadow-xl bg-white/90 backdrop-blur-md border-2 border-gray-200">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-800">
          <Search className="h-7 w-7 text-blue-500" />
          Guia Rápido - Como Usar
        </CardTitle>
        <p className="text-gray-600 mt-2">Siga estes 5 passos simples para extrair contatos</p>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <div className="grid gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200"></div>
                )}
                
                <div className={`flex items-start gap-4 p-5 rounded-xl border-2 ${step.borderColor} ${step.bgColor} hover:shadow-lg transition-all duration-200 hover:-translate-y-1`}>
                  {/* Número do passo */}
                  <div className={`flex-shrink-0 w-12 h-12 ${step.color.replace('text-', 'bg-').replace('-500', '-500')} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {step.number}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className={`h-6 w-6 ${step.color}`} />
                      <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Dica final */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-2xl">💡</div>
            <h4 className="font-bold text-blue-800 text-lg">Dica Importante</h4>
          </div>
          <p className="text-blue-700 font-medium">
            Quanto mais empresas você carregar no Google Maps, mais contatos o extrator conseguirá identificar!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickGuide;
