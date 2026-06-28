// Gera o payload "PIX Copia e Cola" (BR Code / EMV) para uma chave estática.
// Compatível com o padrão do Banco Central — escaneável no app do banco.

function campo(id, valor) {
  return id + String(valor.length).padStart(2, '0') + valor;
}

function crc16(str) {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

export function pixCopiaECola({ chave, nome, cidade, txid = '***' }) {
  const mai = campo('00', 'br.gov.bcb.pix') + campo('01', chave);
  const payload =
    campo('00', '01') +
    campo('26', mai) +
    campo('52', '0000') +
    campo('53', '986') +
    campo('58', 'BR') +
    campo('59', nome.slice(0, 25)) +
    campo('60', cidade.slice(0, 15)) +
    campo('62', campo('05', txid));
  const semCrc = payload + '6304';
  return semCrc + crc16(semCrc);
}

export function pixQrUrl(dados, size = 232) {
  const data = encodeURIComponent(pixCopiaECola(dados));
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=0&data=${data}`;
}

// Dados da IBR Maragogi (chave CNPJ — somente dígitos no payload)
export const PIX_IBR = {
  chave: '12345678000190',
  nome: 'IBR MARAGOGI',
  cidade: 'MARAGOGI',
};
