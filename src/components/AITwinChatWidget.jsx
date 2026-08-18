import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, RefreshCw } from 'lucide-react';
import { SITE_METADATA } from '../data/portfolioData';
import { PromptBox } from './ui/chatgpt-prompt-input';

const SYSTEM_PROMPT = `You are Shashank Jangid's AI Twin (M.Tech AI at IIT Jodhpur, B.Tech Electronics).
Answer directly, concisely, and professionally in 2-3 sentences.
Do NOT use emojis, special formatting characters, spatial symbols, or markdown asterisks. Keep answer compact and clean.`;

function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/[\*\_\~\`\#\>]/g, '')
    .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

export default function AITwinChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello. I am Shashank's AI Twin. Ask me anything about projects, robotics research, or Web3 developments.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (userText, image) => {
    if ((!userText && !image) || isLoading) return;

    const newMsgs = [...messages, { role: 'user', content: userText, image }];
    setMessages(newMsgs);
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

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
            ...newMsgs.map((m) => ({ role: m.role, content: m.content })),
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
                  setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = { role: 'assistant', content: cleanText(fullContent) };
                    return updated;
                  });
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
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Connection error. Please try again.',
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl transition-all hover:scale-105 cursor-pointer flex items-center justify-center border border-slate-700"
          title="Chat with AI Twin"
        >
          <Bot className="w-5 h-5 text-sky-400" />
        </button>
      )}

      {/* Floating Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md h-[540px] rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-bold text-slate-900 text-sm">
                  AI Twin Chat
                </div>
                <div className="text-[10px] text-sky-600 font-mono font-semibold uppercase">
                  AI Neurons Active
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-white">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[88%] p-3 rounded-2xl text-xs leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-slate-900 text-white font-medium self-end ml-auto rounded-br-none'
                    : 'bg-slate-50 border border-slate-200 text-slate-800 self-start mr-auto rounded-bl-none font-normal'
                }`}
              >
                {msg.image && (
                  <img src={msg.image} alt="Uploaded attachment" className="mb-2 max-h-32 rounded-lg object-cover" />
                )}
                {msg.content === '' && isLoading && i === messages.length - 1 ? (
                  <div className="flex items-center gap-2 text-sky-600">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span className="font-mono text-[11px]">Generating response...</span>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* ChatGPT PromptBox Input Bar */}
          <div className="p-2.5 border-t border-slate-100 bg-slate-50">
            <PromptBox
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              placeholder="Ask AI Twin anything..."
              className="bg-white border-slate-200"
            />
          </div>
        </div>
      )}
    </>
  );
}
