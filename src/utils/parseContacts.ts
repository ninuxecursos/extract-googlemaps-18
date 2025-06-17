
interface Contact {
  name: string;
  phone: string;
  type: 'WhatsApp' | 'Telefone';
}

export const parseContacts = (text: string): Contact[] => {
  const contacts: Contact[] = [];
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  // Regex para detectar telefones no formato brasileiro - mais específica
  const phoneRegex = /\((\d{2})\)\s*(\d{4,5})-?(\d{4})/g;
  
  console.log('Linhas do texto:', lines);
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Pular linhas vazias ou muito curtas
    if (line.length < 3) {
      continue;
    }
    
    console.log('Processando linha:', line);
    
    // Verificar se a linha contém telefone
    const phoneMatches = [...line.matchAll(phoneRegex)];
    
    if (phoneMatches.length > 0) {
      console.log('Telefone encontrado na linha:', line);
      
      // Procurar o nome da empresa nas linhas anteriores
      let businessName = '';
      
      // Procurar nas últimas 10 linhas anteriores o nome da empresa
      for (let j = Math.max(0, i - 10); j < i; j++) {
        const prevLine = lines[j].trim();
        
        // Verificar se a linha pode ser um nome de empresa
        if (prevLine && 
            prevLine.length > 3 && 
            !phoneRegex.test(prevLine) && 
            !/^[\d.,\s★⭐"()]+$/.test(prevLine) &&
            !prevLine.startsWith('"') &&
            !/^(Fechado|Fecha|Aberto|Abre|Loja de|R\.|Av\.|Rua|Alameda)/.test(prevLine) &&
            !/^(Em estoque|Retirada|Entrega|Serviços|Aulas|Compras)/.test(prevLine) &&
            !/^(Instalar|Resultados|Compartilhar|Classificação|Horas|Todos os filtros|Salvos|Recentes)/.test(prevLine) &&
            !prevLine.includes('⋅') &&
            !prevLine.includes('·') &&
            !/^\d+$/.test(prevLine) &&
            !prevLine.includes('São Paulo') &&
            !prevLine.includes('Guarulhos')) {
          
          businessName = prevLine;
          break;
        }
      }
      
      // Se não encontrou nas linhas anteriores, tentar extrair da própria linha
      if (!businessName) {
        const lineWithoutPhone = line.replace(phoneRegex, '').trim();
        if (lineWithoutPhone.length > 3) {
          businessName = lineWithoutPhone;
        }
      }
      
      // Limpar o nome da empresa
      businessName = businessName
        .replace(/^[•\-\*\s]+/, '') // Remove marcadores de lista
        .replace(/\s+/g, ' ') // Normaliza espaços
        .replace(/[★⭐]\s*[\d.,]+.*$/, '') // Remove avaliações
        .replace(/\s*-\s*.*$/, '') // Remove descrições após hífen
        .replace(/\s*·.*$/, '') // Remove informações após ·
        .replace(/\s*⋅.*$/, '') // Remove informações após ⋅
        .trim();
      
      console.log('Nome da empresa encontrado:', businessName);
      
      if (businessName && businessName.length > 2) {
        phoneMatches.forEach(match => {
          const ddd = match[1];
          const firstPart = match[2];
          const secondPart = match[3];
          
          // Garantir formato consistente (XX) XXXXX-XXXX
          let formattedPhone;
          if (firstPart.length === 4) {
            // Número antigo: adicionar 9 no início para padronizar
            formattedPhone = `(${ddd}) 9${firstPart}-${secondPart}`;
          } else {
            // Número já com 5 dígitos
            formattedPhone = `(${ddd}) ${firstPart}-${secondPart}`;
          }
          
          const isWhatsApp = isWhatsAppNumber(formattedPhone);
          
          console.log('Contato adicionado:', { businessName, formattedPhone, isWhatsApp });
          
          contacts.push({
            name: businessName,
            phone: formattedPhone,
            type: isWhatsApp ? 'WhatsApp' : 'Telefone'
          });
        });
      }
    }
  }
  
  // Remover duplicatas
  const uniqueContacts = contacts.filter((contact, index, self) => 
    index === self.findIndex(c => c.name === contact.name && c.phone === contact.phone)
  );
  
  console.log('Contatos únicos extraídos:', uniqueContacts);
  return uniqueContacts;
};

const isWhatsAppNumber = (phone: string): boolean => {
  // Remove todos os caracteres não numéricos
  const numbers = phone.replace(/\D/g, '');
  
  // WhatsApp geralmente são números com 11 dígitos (DDD + 9 + 8 dígitos)
  if (numbers.length === 11) {
    // Verifica se o terceiro dígito é 9 (celular)
    return numbers[2] === '9';
  }
  
  return false;
};

// Função para converter telefone para formato internacional
export const formatPhoneToInternational = (phone: string): string => {
  const numbers = phone.replace(/\D/g, '');
  return `+55${numbers}`;
};
