
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SeoContent = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-12 mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Como Extrair Contatos Empresariais</h2>
              <p className="text-sm leading-relaxed">
                Nossa ferramenta de extração de contatos empresariais permite processar dados de diretórios 
                comerciais de forma automática. Basta colar os resultados de busca do Google Maps, Páginas Amarelas 
                ou outros diretórios empresariais e nossa inteligência artificial identifica automaticamente 
                nomes de empresas, números de telefone e classifica quais números são WhatsApp Business.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Identificação Automática de WhatsApp</h2>
              <p className="text-sm leading-relaxed">
                O sistema analisa os números extraídos e identifica automaticamente quais são números de 
                celular (potenciais WhatsApp) e quais são telefones fixos. Para números móveis brasileiros, 
                a ferramenta gera links diretos do WhatsApp, facilitando o contato imediato com empresas 
                e prospects para vendas, parcerias ou networking profissional.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Geração de Links WhatsApp</h2>
              <p className="text-sm leading-relaxed">
                Com um clique, gere links diretos do WhatsApp para todos os contatos identificados. 
                Você pode incluir uma mensagem personalizada que será enviada automaticamente, 
                ideal para campanhas de marketing, prospecção de clientes ou apresentação de serviços. 
                Os links gerados seguem o padrão wa.me, garantindo compatibilidade total.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Ferramenta 100% Gratuita</h2>
              <p className="text-sm leading-relaxed">
                Esta ferramenta de extração de contatos é completamente gratuita e não requer cadastro. 
                Ideal para pequenas empresas, freelancers, vendedores, consultores e profissionais de 
                marketing que precisam organizar e processar listas de contatos empresariais de forma 
                eficiente sem custos adicionais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Casos de Uso</h2>
              <p className="text-sm leading-relaxed">
                Perfeita para prospecção de clientes B2B, criação de listas de leads qualificados, 
                organização de contatos de fornecedores, networking empresarial, campanhas de vendas 
                direcionadas, pesquisa de mercado e análise de concorrência. Economize horas de trabalho 
                manual na organização de dados empresariais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">Privacidade e Segurança</h2>
              <p className="text-sm leading-relaxed">
                Todos os dados processados permanecem no seu navegador. Não armazenamos, compartilhamos 
                ou transmitimos nenhuma informação para servidores externos. A ferramenta funciona 
                completamente offline após o carregamento, garantindo total privacidade dos seus 
                dados empresariais e contatos comerciais.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Palavras-chave Relacionadas</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {[
              'extrator de contatos', 'números whatsapp', 'contatos empresariais', 'leads qualificados',
              'prospecção B2B', 'ferramenta gratuita', 'extração de dados', 'diretório empresarial',
              'networking profissional', 'vendas online', 'marketing digital', 'CRM gratuito',
              'lista de empresas', 'contatos comerciais', 'WhatsApp Business', 'geração de leads'
            ].map((keyword) => (
              <span key={keyword} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          <p>© 2024 Extrator de Contatos Empresariais - Ferramenta gratuita para extração e organização de contatos comerciais</p>
        </div>
      </div>
    </div>
  );
};

export default SeoContent;
