import React, { useState } from 'react';
import { Bot, Send, RefreshCw, Cpu, ShieldCheck, Copy, Check } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';

const SYSTEM_PROMPT = `You are Shashank Jangid's AI Twin (M.Tech AI at IIT Jodhpur, B.Tech Electronics).
Answer directly, concisely, and professionally in 2-3 sentences.
Do NOT use emojis, special formatting characters, spatial symbols, or markdown asterisks. Keep answer compact and clean.`;

const SUGGESTIONS = [
  "6-DOF Kinematics & DSP",
  "Autonomous School Bell",
  "IIT Jodhpur AI Research",
  "Web3 & Smart Contracts",
];

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/[\*\_\~\`\#\>]/g, '')
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

export default function AITwinPlayground() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRunInference = async (customPrompt) => {
    const query = customPrompt || prompt;
    if (!query.trim() || isLoading) return;

    if (customPrompt) setPrompt(customPrompt);

    setIsLoading(true);
    setResponse('');

    try {
      const apiKey = SITE_METADATA.groqKeyDefault;
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: query.trim() },
          ],
          max_tokens: 300,
          temperature: 0.5,
          stream: true,
        }),
      });

      if (!res.ok) throw new Error('API Error');

      const reader = res.body?.getReader();
      const dec = new TextDecoder();
      let buffer = '';
      let fullContent = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += dec.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith('data: ') && trimmed !== 'data: [DONE]') {
              try {
                const parsed = JSON.parse(trimmed.slice(6));
                const content = parsed.choices[0]?.delta?.content || '';
                if (content) {
                  fullContent += content;
                  setResponse(cleanText(fullContent));
                }
              } catch (e) {
                // Ignore parse errors
              }
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      setResponse('Connection error while communicating with AI Twin.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 relative overflow-hidden bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="shashank-card p-6 sm:p-8 max-w-4xl mx-auto relative bg-slate-50 border border-slate-200 shadow-md rounded-3xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-heading font-extrabold text-slate-900">
                AI Twin Live Playground
              </h3>
              <p className="text-xs text-sky-600 font-mono uppercase font-semibold">
                AI Neurons Active
              </p>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Clean Output</span>
            </div>
          </div>

          {/* Quick Action Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                onClick={() => handleRunInference(sug)}
                className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 font-medium transition-all cursor-pointer shadow-2xs"
              >
                + {sug}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunInference()}
                placeholder="Ask about AI, IoT, Robotics, Web3, or IIT Jodhpur research..."
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-body transition-colors shadow-xs"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                <span>Press Enter to stream response</span>
              </div>

              <button
                onClick={() => handleRunInference()}
                disabled={isLoading || !prompt.trim()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-btn font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer disabled:opacity-40"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Streaming...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Run Inference</span>
                  </>
                )}
              </button>
            </div>

            {/* Enlarged, Smooth Response Output Box */}
            {response && (
              <div className="mt-5 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm relative group transition-all duration-500 ease-out animate-fade-in-up">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
                  <span className="font-mono text-xs uppercase text-sky-600 tracking-wider font-bold">
                    AI Twin Output
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                    title="Copy response"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-sm sm:text-base text-slate-800 font-normal leading-relaxed tracking-normal">
                  {response}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
