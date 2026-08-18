import React, { useState } from 'react';
import { Bot, Send, RefreshCw, Cpu, ShieldCheck, Copy, Check } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';

const SYSTEM_PROMPT = `You are Shashank Jangid's AI Twin (M.Tech AI at IIT Jodhpur, B.Tech Electronics).
Answer directly, concisely, and professionally in 2-3 sentences.
Do NOT use special formatting characters, spatial symbols, or markdown asterisks. Keep answer compact and clean.`;

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
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

export default function AITwinInlineBox() {
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
    <section className="py-14 relative overflow-hidden bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="nyro-card p-6 sm:p-8 max-w-4xl mx-auto relative bg-[#12151e]/80 border border-white/10 shadow-2xl rounded-3xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 text-black flex items-center justify-center font-bold shadow-lg">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  AI Twin Live Playground
                </h3>
                <p className="text-xs text-emerald-400 font-mono uppercase font-semibold">
                  Instant Neural AI Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filtered Response</span>
            </div>
          </div>

          {/* Quick Action Suggestion Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                onClick={() => handleRunInference(sug)}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/80 font-medium transition-colors cursor-pointer"
              >
                + {sug}
              </button>
            ))}
          </div>

          {/* Prompt Form */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunInference()}
                placeholder="Ask about AI, IoT, Robotics, Web3, or IIT Jodhpur research..."
                className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 font-body transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-white/50 font-mono flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>Press Enter for instant compact response</span>
              </div>

              <button
                onClick={() => handleRunInference()}
                disabled={isLoading || !prompt.trim()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer disabled:opacity-40"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Inference Streaming...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Ask AI Twin</span>
                  </>
                )}
              </button>
            </div>

            {/* Response Card */}
            {response && (
              <div className="mt-4 bg-black/50 border border-white/10 rounded-xl p-4 text-xs text-white/90 font-mono leading-relaxed shadow-sm relative group animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase text-cyan-400 tracking-wider font-bold">
                    AI Twin Response:
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1 text-white/40 hover:text-white transition-colors"
                    title="Copy response"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {response}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
