"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from './button';
import { Card } from './card';
import { Send, X } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Função para rolar o chat automaticamente para o final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();
      typeMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      typeMessage("Desculpe, ocorreu um erro. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Função para exibir o texto da IA gradualmente (efeito de digitação)
  const typeMessage = (fullMessage: string) => {
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullMessage.length) {
        currentText += fullMessage[index];
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage?.role === "assistant") {
            return [...prev.slice(0, -1), { role: "assistant", content: currentText }];
          } else {
            return [...prev, { role: "assistant", content: currentText }];
          }
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60); // Ajuste esse valor para controlar a velocidade da digitação
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-18 w-18 rounded-full bg-white p-0 shadow-lg border hover:shadow-xl transition"
        >
          <Image src="/bearia.png" alt="Mascote Kodiak" width={56} height={56} className="rounded-full" />
        </Button>
      ) : (
        <Card className="w-[350px] shadow-lg">
          <div className="flex items-center justify-between border-b p-4 bg-gray-100">
            <div className="flex items-center gap-2">
              <Image src="/bearia.png" alt="Mascote Kodiak" width={40} height={40} className="rounded-full" />
              <h3 className="font-semibold">Bear Assistente</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-[400px] overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-lg bg-gray-100 px-4 py-2 text-gray-900">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 rounded-md border px-3 py-2 focus:border-blue-600 focus:outline-none"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading}
                className="h-10 w-10 rounded-full bg-blue-600 p-0 hover:bg-blue-700"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
