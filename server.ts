import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header as required
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Ground truth facts for Tenity Q&A
const TENITY_KNOWLEDGE_PROMPT = `
You are the official Tenity AI Knowledge Guide. Tenity is a global fintech innovation platform and early-stage venture fund with hubs in Zurich, London, Singapore, Hong Kong, Madrid, and Istanbul.

Key Tenity Facts:
- Accelerator Programs: 12-week intensive cohort programs designed for fintech, insurtech, AI/finance, and digital asset startups. Includes the flagship Tenity Accelerator, the Visa Innovation Program Europe, and HackZone by Allianz.
- Corporate Partners: Over 65+ global financial institutions (SIX Group, UBS, Ripple, Generali, Worldline, Keyrock, VISA, Julius Bär) offering direct commercial Proof-of-Concept (PoC) opportunities.
- Investment Criteria:
  - Stages: Early-stage pre-seed and seed founders.
  - Domains: Core banking modernizers, embedded finance, payment orchestration, algorithmic risk & compliance (regtech), insurtech, decentralized finance & tokenized real-world assets, wealthtech, applied generative AI in financial services.
  - Ticket Size: Up to $250,000 initial check with follow-on capital reserves and co-investment syndication with top-tier venture funds.
  - Team: High-conviction technical founders, deep domain understanding, validated prototype or early customer engagement.
  - Equity & Terms: Programs do not take mandatory equity for attendance; equity is negotiated strictly in connection with direct venture capital investment.
- Hubs & Global Reach: Headquartered in Zurich (Switzerland) with physical operating hubs and local teams in London, Singapore, Hong Kong, Madrid, and Istanbul.
- Track Record: 250+ startups accelerated, $140M+ assets under management, 100+ corporate innovation programs delivered, 80%+ PoC-to-commercial contract conversion.

Answer the user's question concisely, clearly, authoritatively, and warmly in 2-4 sentences or short bullet points if helpful. Stick strictly to facts about Tenity. Do not make up non-existent programs.
`;

// Fallback response generator if Gemini API key is missing or encounters issues
function getFallbackTenityAnswer(question: string): string {
  const q = question.toLowerCase();

  if (q.includes('ticket') || q.includes('check size') || q.includes('how much') || q.includes('funding') || q.includes('investment size')) {
    return 'Tenity typically deploys up to $250,000 in initial pre-seed and seed tickets, with dedicated reserves for follow-on participation and co-investment syndication alongside leading global venture partners.';
  }
  if (q.includes('criteria') || q.includes('require') || q.includes('eligible') || q.includes('who can apply') || q.includes('qualify')) {
    return 'Tenity backs early-stage founders building at the convergence of fintech, AI, and digital assets. We evaluate founding team pedigree and technical ability, validated prototypes or early traction, and strategic synergy with our 65+ banking and corporate partners.';
  }
  if (q.includes('equity') || q.includes('fee') || q.includes('cost') || q.includes('take equity') || q.includes('free')) {
    return 'Tenity does not charge attendance fees for accelerator programs, nor do we take arbitrary equity simply for joining. Equity terms are agreed upon transparently solely when Tenity deploys risk capital.';
  }
  if (q.includes('duration') || q.includes('length') || q.includes('long') || q.includes('schedule') || q.includes('weeks')) {
    return 'Our flagship accelerator programs typically run for 12 intensive weeks, structured into sprint phases: market & architecture validation, corporate PoC co-design, and investor Demo Day pitching.';
  }
  if (q.includes('location') || q.includes('hub') || q.includes('remote') || q.includes('where') || q.includes('zurich') || q.includes('singapore')) {
    return 'Tenity operates physical ecosystem hubs in Zurich, London, Singapore, Hong Kong, Madrid, and Istanbul. Programs offer hybrid execution with high-value in-person immersion weeks and corporate networking.';
  }
  if (q.includes('corporate') || q.includes('partner') || q.includes('bank') || q.includes('poc') || q.includes('client')) {
    return 'Tenity partners with over 65 corporate institutions including SIX Group, UBS, Ripple, Generali, Worldline, Keyrock, and VISA to facilitate commercial Proof-of-Concepts (PoCs) and multi-year enterprise contracts.';
  }
  if (q.includes('visa') || q.includes('vip') || q.includes('europe')) {
    return 'The Visa Innovation Program Europe is an equity-free collaborative platform co-run by Tenity and Visa, facilitating over 100+ enterprise PoCs across European fintech scaleups and banks.';
  }

  return 'Tenity accelerates and finances early-stage fintech, AI, and digital asset ventures across Europe and Asia, connecting visionary founders directly with institutional capital and 65+ corporate partners. You can apply directly through our seasonal cohort portal or connect with our hub directors.';
}

// API endpoint for interactive FAQ answering
app.post('/api/faq/ask', async (req, res) => {
  const { question } = req.body;
  if (!question || typeof question !== 'string' || !question.trim()) {
    return res.status(400).json({ error: 'Question is required.' });
  }

  const cleanQuestion = question.trim();

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: cleanQuestion,
        config: {
          systemInstruction: TENITY_KNOWLEDGE_PROMPT,
          temperature: 0.2,
        },
      });

      const answer = response.text || getFallbackTenityAnswer(cleanQuestion);
      return res.json({ question: cleanQuestion, answer, source: 'ai' });
    } catch (err) {
      console.error('Error invoking Gemini for FAQ:', err);
      const fallback = getFallbackTenityAnswer(cleanQuestion);
      return res.json({ question: cleanQuestion, answer: fallback, source: 'knowledge_base' });
    }
  } else {
    const fallback = getFallbackTenityAnswer(cleanQuestion);
    return res.json({ question: cleanQuestion, answer: fallback, source: 'knowledge_base' });
  }
});

// Configure Vite middleware in development, or serve dist in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
