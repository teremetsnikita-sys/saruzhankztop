import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, contact, phone, email, category, message, source, type, items } = req.body;
  
  // Вписываем токены напрямую в код, как вы и просили
  const botToken = "7726588235:AAH6v7Lz0Vz9S2W6k_r3M4H4sY8U8u4W0eY"; 
  const chatId = "-5446008691";

  const timestamp = new Date().toLocaleString('ru-RU', { 
    timeZone: 'Asia/Almaty',
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  let itemsList = "";
  if (items && Array.isArray(items)) {
    itemsList = "\n📦 СОСТАВ ЗАКАЗА:\n" + items.map((item: any) => 
      `• ${item.articleCode} (${item.seriesName}) — ${item.quantity} шт.`
    ).join("\n") + "\n";
  }

  const contactDisplay = phone ? `${phone}${email ? ` / ${email}` : ''}` : contact;

  const telegramMessage = `⚡ НОВАЯ ЗАЯВКА // SARUZHAN.KZ\n\n` +
    `📌 Источник: ${source || 'Форма заявки'}\n` +
    `📋 Тип: ${type || 'Запрос'}\n\n` +
    `👤 Клиент: ${name}\n` +
    `📞 Контакты: ${contactDisplay}\n` +
    (type === 'Сервисное обслуживание' ? `🛠 Услуга: ${category}\n` : (category ? `📦 Категория: ${category}\n` : "")) +
    itemsList +
    `💬 Комментарий:\n${message || '—'}\n\n` +
    `🕒 ${timestamp} (KZ)`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
    });

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ error: 'Failed to send' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
}
