
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  MessageCircle, 
  Link, 
  Gift, 
  Target, 
  Shield,
  Search,
  Building,
  TrendingUp,
  Smartphone,
  Database,
  Zap
} from 'lucide-react';

const SeoContent = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/30 hover:border-blue-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Como Extrair Contatos Empresariais</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Nossa ferramenta de extração de contatos empresariais permite processar dados de diretórios 
                comerciais de forma automática. Basta colar os resultados de busca do Google Maps, Páginas Amarelas 
                ou outros diretórios empresariais e nossa inteligência artificial identifica automaticamente 
                nomes de empresas, números de telefone e classifica quais números são WhatsApp Business.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-700/30 hover:border-green-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Identificação Automática de WhatsApp</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                O sistema analisa os números extraídos e identifica automaticamente quais são números de 
                celular (potenciais WhatsApp) e quais são telefones fixos. Para números móveis brasileiros, 
                a ferramenta gera links diretos do WhatsApp, facilitando o contato imediato com empresas e 
                prospects para vendas, parcerias ou networking profissional.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-700/30 hover:border-purple-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Link className="h-8 w-8 text-purple-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Geração de Links WhatsApp</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Com um clique, gere links diretos do WhatsApp para todos os contatos identificados. 
                Você pode incluir uma mensagem personalizada que será enviada automaticamente, 
                ideal para campanhas de marketing, prospecção de clientes ou apresentação de serviços. 
                Os links gerados seguem o padrão wa.me, garantindo compatibilidade total.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border-yellow-700/30 hover:border-yellow-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Gift className="h-8 w-8 text-yellow-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Ferramenta 100% Gratuita</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Esta ferramenta de extração de contatos é completamente gratuita e não requer cadastro. 
                Ideal para pequenas empresas, freelancers, vendedores, consultores e profissionais de 
                marketing que precisam organizar e processar listas de contatos empresariais de forma 
                eficiente sem custos adicionais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-700/30 hover:border-red-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-red-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Casos de Uso</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Perfeita para prospecção de clientes B2B, criação de listas de leads qualificados, 
                organização de contatos de fornecedores, networking empresarial, campanhas de vendas 
                direcionadas, pesquisa de mercado e análise de concorrência. Economize horas de trabalho 
                manual na organização de dados empresariais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border-cyan-700/30 hover:border-cyan-600/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-cyan-400 mr-3" />
                <h2 className="text-xl font-bold text-white">Privacidade e Segurança</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Todos os dados processados permanecem no seu navegador. Não armazenamos, compartilhamos 
                ou transmitimos nenhuma informação para servidores externos. A ferramenta funciona 
                completamente offline após o carregamento, garantindo total privacidade dos seus 
                dados empresariais e contatos comerciais.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <Search className="h-8 w-8 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Palavras-chave Relacionadas</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              { text: 'extrator de contatos', icon: Database },
              { text: 'números whatsapp', icon: Smartphone },
              { text: 'contatos empresariais', icon: Building },
              { text: 'leads qualificados', icon: Target },
              { text: 'prospecção B2B', icon: TrendingUp },
              { text: 'ferramenta gratuita', icon: Gift },
              { text: 'extração de dados', icon: Database },
              { text: 'diretório empresarial', icon: Building },
              { text: 'networking profissional', icon: Users },
              { text: 'vendas online', icon: TrendingUp },
              { text: 'marketing digital', icon: Target },
              { text: 'CRM gratuito', icon: Database },
              { text: 'lista de empresas', icon: Building },
              { text: 'contatos comerciais', icon: Users },
              { text: 'WhatsApp Business', icon: MessageCircle },
              { text: 'geração de leads', icon: Zap }
            ].map((keyword, index) => {
              const IconComponent = keyword.icon;
              return (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 px-4 py-2 rounded-full border border-gray-600 hover:border-gray-500 transition-all duration-300 flex items-center gap-2"
                >
                  <IconComponent className="h-3 w-3" />
                  {keyword.text}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          <p>© 2025 ExtratorDeContatosEmpresariais - Ferramenta gratuita para extração e organização de contatos comerciais</p>
        </div>
      </div>
    </div>
  );
};

export default SeoContent;
