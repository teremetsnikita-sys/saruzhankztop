import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send("User-agent: *\nAllow: /\nSitemap: https://saruzhan.kz/sitemap.xml");
  });

  // Basic Sitemap
  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    const baseUrl = "https://saruzhan.kz";
    const pages = [
      "",
      "/catalog",
      "/service",
      "/about",
      "/contacts",
      "/rfq",
      "/request"
    ];
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === "" ? "1.0" : "0.8"}</priority>
  </url>`).join('')}
</urlset>`;
    res.send(xml);
  });

  // Telegram API Route
  app.post("/api/send-telegram", async (req, res) => {
    const { name, contact, phone, email, category, message, source, type, items } = req.body;
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials missing");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const timestamp = new Date().toLocaleString('ru-RU', { 
      timeZone: 'Asia/Almaty',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
      (type === 'Сервисное обслуживание' 
        ? `🛠 Услуга: ${category}\n` 
        : (category ? `📦 Категория / Оборудование: ${category}\n` : "")) +
      itemsList +
      `💬 Комментарий / Текст:\n${message || '—'}\n\n` +
      `🕒 ${timestamp} (KZ)`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage
        })
      });

      if (response.ok) {
        res.json({ success: true });
      } else {
        const errorData = await response.json();
        console.error("Telegram API Error:", errorData);
        res.status(500).json({ error: "Failed to send message to Telegram" });
      }
    } catch (error) {
      console.error("Network Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
