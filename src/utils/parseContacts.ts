
interface Contact {
  name: string;
  phone: string;
  type: 'WhatsApp' | 'Telefone';
}

export const parseContacts = (text: string): Contact[] => {
  const contacts: Contact[] = [];
  const lines = text.split('\n').filter(line => line.trim() !== '');
  
  // Regex para detectar telefones no formato brasileiro
  const phoneRegex = /(\(?(?:0?11|0?[12-9][0-9])\)?[-.\s]?(?:9?\d{4}[-.\s]?\d{4}|\d{4}[-.\s]?\d{4}))/g;
  
  // Regex para formato WhatsApp específico: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  const whatsappRegex = /\((\d{2})\)\s?(\d{4,5})-?(\d{4})/g;
  
  let currentContact: Partial<Contact> = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Pular linhas muito curtas ou que são apenas números/avaliações
    if (line.length < 3 || /^[\d.,\s★⭐]+$/.test(line)) {
      continue;
    }
    
    // Detectar telefones na linha
    const phoneMatches = line.match(phoneRegex);
    
    if (phoneMatches) {
      // Se encontrou telefone, a linha anterior ou atual deve conter o nome da empresa
      let businessName = '';
      
      // Tentar extrair nome da empresa da mesma linha (removendo o telefone)
      businessName = line.replace(phoneRegex, '').trim();
      
      // Se não há nome na linha atual, procurar nas linhas anteriores
      if (!businessName || businessName.length < 3) {
        for (let j = Math.max(0, i - 3); j < i; j++) {
          const prevLine = lines[j].trim();
          if (prevLine && prevLine.length > 3 && !phoneRegex.test(prevLine) && !/^[\d.,\s★⭐]+$/.test(prevLine)) {
            businessName = prevLine;
            break;
          }
        }
      }
      
      // Limpar o nome da empresa
      businessName = businessName
        .replace(/^[•\-\*\s]+/, '') // Remove marcadores de lista
        .replace(/\s+/g, ' ') // Normaliza espaços
        .replace(/[★⭐]\s*[\d.,]+.*$/, '') // Remove avaliações
        .replace(/\s*-\s*.*$/, '') // Remove descrições após hífen
        .trim();
      
      if (businessName && businessName.length > 2) {
        phoneMatches.forEach(phone => {
          const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
          const formattedPhone = formatPhone(phone);
          const isWhatsApp = isWhatsAppNumber(phone);
          
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
  
  return uniqueContacts;
};

const formatPhone = (phone: string): string => {
  // Remove todos os caracteres não numéricos
  const numbers = phone.replace(/\D/g, '');
  
  // Se tem 11 dígitos (com DDD)
  if (numbers.length === 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  }
  // Se tem 10 dígitos (com DDD)
  else if (numbers.length === 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  }
  // Retorna o telefone original se não conseguir formatar
  return phone;
};

const isWhatsAppNumber = (phone: string): boolean => {
  // Remove todos os caracteres não numéricos
  const numbers = phone.replace(/\D/g, '');
  
  // WhatsApp geralmente são números com 11 dígitos (DDD + 9 + 8 dígitos)
  // ou 10 dígitos (DDD + 8 dígitos) para números mais antigos
  if (numbers.length === 11) {
    // Verifica se o terceiro dígito é 9 (celular)
    return numbers[2] === '9';
  } else if (numbers.length === 10) {
    // Números de 10 dígitos também podem ser WhatsApp (formato antigo)
    return true;
  }
  
  return false;
};
