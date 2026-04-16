import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/generate-readme", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Convert this into a professional README:\n\n${text}`
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        }
      }
    );

    res.json({
      output: response.data.choices[0].message.content
    });

  } catch (err) {
    res.status(500).json({ error: "AI request failed" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});