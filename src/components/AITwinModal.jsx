import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, RefreshCw } from 'lucide-react';
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

export default function AITwinModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello. I am Shashank's AI Twin. Ask me anything about robotics projects, M.Tech AI research at IIT Jodhpur, or Web3 developments.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Lock background body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in-up overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="shashank-card w-full max-w-xl h-[560px] max-h-[90vh] border border-slate-200 relative shadow-2xl bg-white flex flex-col overflow-hidden rounded-3xl my-auto"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-xs">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-slate-900 text-base">
                Shashank's AI Twin
              </div>
              <div className="text-[11px] text-sky-600 font-mono uppercase font-semibold">
                AI Neurons Active
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
            title="Close dialog (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log */}
        <div 
          className="flex-1 overflow-y-auto p-4 space-y-3 bg-white overscroll-contain"
          data-lenis-prevent="true"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-slate-900 text-white font-medium self-end ml-auto rounded-br-none'
                  : 'bg-slate-50 border border-slate-200 text-slate-800 self-start mr-auto rounded-bl-none font-normal'
              }`}
            >
              {msg.image && (
                <img src={msg.image} alt="Uploaded preview" className="mb-2 max-h-40 rounded-xl object-cover border border-slate-200" />
              )}
              {msg.content === '' && isLoading && i === messages.length - 1 ? (
                <div className="flex items-center gap-2 text-sky-600">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span className="font-mono text-xs">Generating output...</span>
                </div>
              ) : (
                msg.content
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Bar with PromptBox */}
        <div className="p-3 border-t border-slate-200 bg-slate-50">
          <PromptBox
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            placeholder="Ask AI Twin about AI, IoT, Web3, Robotics..."
            className="bg-white border-slate-300"
          />
        </div>
      </div>
    </div>
  );
}
