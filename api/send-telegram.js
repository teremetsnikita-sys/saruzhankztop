export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, contact, phone, email, category, message, source, type, items } = body;
    
    // ПРАВИЛЬНЫЙ ТОКЕН
    const botToken = "8975150222:AAF4VOtVotC3T1bPGevJzV9ET-NlMOp0YK0"; 
    const chatId = "-5446008691";

    const timestamp = new Date().toLocaleString('ru-RU', { 
      timeZone: 'Asia/Almaty',
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    let itemsList = "";
    if (items && Array.isArray(items)) {
      itemsList = "\n📦 СОСТАВ ЗАКАЗА:\n" + items.map((item) => 
        `• ${item.articleCode} (${item.seriesName}) — ${item.quantity} шт.`
      ).join("\n") + "\n";
    }

    const contactDisplay = phone ? `${phone}${email ? ` / ${email}` : ''}` : contact;
    const telegramMessage = `⚡ НОВАЯ ЗАЯВКА // SARUZHAN.KZ\n\n📌 Источник: ${source || 'Форма заявки'}\n📋 Тип: ${type || 'Запрос'}\n\n👤 Клиент: ${name}\n📞 Контакты: ${contactDisplay}\n` + (type === 'Сервисное обслуживание' ? `🛠 Услуга: ${category}\n` : (category ? `📦 Категория: ${category}\n` : "")) + itemsList + `💬 Комментарий:\n${message || '—'}\n\n🕒 ${timestamp} (KZ)`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
    });

    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Telegram API Error' }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

export const config = {
  runtime: 'edge',
};
