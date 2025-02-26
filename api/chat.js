require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');

// Logging at the start of the file
console.log("🟢 Server is starting...");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Logging after middleware setup
console.log("🟢 Middleware set up complete");

const openai = new OpenAI({
    apiKey: process.env.SECRET_KEY,
});

// Chat route with logs
app.post('/api/chat', async (req, res) => {
    console.log("📨 Received a POST request at /api/chat");

    const userMessage = req.body.message;
    console.log("👤 User Message:", userMessage);

    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a school chatbot. Assist users with school inquiries." },
                { role: "user", content: userMessage },
            ],
            model: "gpt-4",
        });

        console.log("🤖 OpenAI Response Received");

        const botReply = response.choices[0].message.content;
        res.status(200).json({ reply: botReply });
    } catch (error) {
        console.error("❌ Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to generate a response." });
    }
});

// Make sure the server keeps running
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// Log at the end of the file
console.log("🟢 End of chat.js file reached.");
