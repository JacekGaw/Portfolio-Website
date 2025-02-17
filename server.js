import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import nodemailer from 'nodemailer';

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "http://localhost:8088",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://devperpro.bieda.it"
  ],
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'nonce-randomvalue'; img-src 'self' data:; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"
  );
  next();
});

// ** Serve the React app's build folder **
const distPath = path.join(__dirname, "dist"); 
app.use(express.static(distPath));

// ** Catch-all route to serve React's index.html for client-side routing **
app.get("*", (_, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.post("/contact", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const {name, email, message} = req.body;
    const timestamp = new Date();
    const text = 
    `
    Hey!
    You have a new message from ${name} (${email}). It was sent on ${timestamp.toLocaleString('en-GB')}.
    Message is:

    ${message}

    Remember to get back to it!
    Your website! :)
    `

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: "Someone leave a message on your website!",
      text: text,
    };
    await transporter.sendMail(mailOptions);
    return res.status(200).json({message: "Message sent"});
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: err.message});
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
