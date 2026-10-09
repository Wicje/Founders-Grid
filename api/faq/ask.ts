import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  // Support CORS for serverless invocation
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question } = req.body || {};
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI();
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `You are Tenity Intelligence, the official knowledge assistant for Tenity (formerly F10) — a global fintech innovation platform and early-stage venture fund operating hubs in Zurich, London, Singapore, Hong Kong, Madrid, and Istanbul.
Key Tenity facts:
- Venture Fund invests up to $250,000 initial checks in pre-seed and seed rounds.
- Accelerators are equity-free participation (equity is only taken in connection with direct fund investment checks).
- Runs 12-week structured programs, semi-annual cohorts (Spring and Autumn).
- Corporate partners include SIX Group, UBS, Ripple, Generali, Worldline, Keyrock, and VISA.
- Runs the Visa Innovation Program Europe (100+ PoCs executed, >80% commercial pilot-to-contract rate).
- Open to startups incorporated worldwide (Switzerland, Delaware, UK, Singapore, EU, etc.).

Please answer the user's question concisely in 2 to 4 friendly, professional, authoritative sentences.

User question: "${question}"`,
              },
            ],
          },
        ],
      });

      const text = response.text?.trim();
      if (text) {
        return res.status(200).json({
          question,
          answer: text,
          source: 'ai',
        });
      }
    } catch (err) {
      console.error('Vercel serverless AI call error:', err);
    }
  }

  // Serverless fallback response
  return res.status(200).json({
    question,
    answer: `Tenity accelerates and backs early-stage fintech, insurtech, AI, and digital asset ventures globally. We provide up to $250,000 in seed checks, structured 12-week cohorts across Zurich, London, Singapore, Madrid, and Istanbul, and direct commercial PoC access to 65+ institutional partners including SIX, UBS, and VISA with zero mandatory participation equity.`,
    source: 'knowledge_base',
  });
}
