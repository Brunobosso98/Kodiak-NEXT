export const dynamic = "force-dynamic"; // Garante que a API sempre será SSR

import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import fetch from "node-fetch"; // Para Next.js (ECMAScript Modules)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log("🔑 OpenAI API Key:", process.env.OPENAI_API_KEY ? "Carregada" : "NÃO CARREGADA!");

// Função para buscar informações no arquivo .txt
const loadPrompt = (): string => {
  try {
    const filePath = path.join(process.cwd(), "data", "prompt.txt");
    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Erro ao carregar o arquivo de prompt:", error);
    return "";
  }
};

// Função para buscar informações do site
const fetchWebsiteData = async (): Promise<string> => {
  try {
    const response = await fetch("https://kodiakerp.com.br");
    return await response.text();
  } catch (error) {
    console.error("Erro ao buscar dados do site:", error);
    return "";
  }
};

// Função para buscar informações do Instagram
const fetchInstagramData = async (): Promise<string> => {
  try {
    const response = await fetch("https://www.instagram.com/kodiakerp/");
    return await response.text();
  } catch (error) {
    console.error("Erro ao buscar dados do Instagram:", error);
    return "";
  }
};

// API Handler
// Função para enviar mensagem para o WhatsApp
const sendWhatsAppMessage = async (name: string, phone: string) => {
  try {
    const response = await fetch("https://chatapi.kodiakerp.com.br/api/messages/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer NX3gJgYYpmhzZbpCBQtO5gleMfIwUE"
      },
      body: JSON.stringify({
        number: phone,
        body: `Olá! Recebemos uma solicitação de contato do(a) ${name}. Em breve, um de nossos especialistas entrará em contato.`
      })
    });
    return response.ok;
  } catch (error) {
    console.error("WhatsApp API error:", error);
    return false;
  }
};

export async function POST(req: Request) {
  try {
    const { messages, contactInfo } = await req.json();
    console.log("Received request:", { messages, contactInfo });
    
    // Se houver informações de contato, enviar para o WhatsApp
    if (contactInfo) {
      console.log("Processing contact info:", contactInfo);
      const success = await sendWhatsAppMessage(contactInfo.name, contactInfo.phone);
      return NextResponse.json({ 
        message: success ? 
          "Ótimo! Suas informações foram enviadas com sucesso. Em breve, um especialista entrará em contato com você." :
          "Desculpe, houve um erro ao processar sua solicitação. Por favor, tente novamente mais tarde."
      });
    }

    const lastUserMessage = messages[messages.length - 1]?.content;
    console.log("Last user message:", lastUserMessage);
    const promptText = loadPrompt();
    const contexto = `### PROMPT BASE:\n${promptText}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            Instruções do Bear Assistente:
            ${promptText}
            
            Regras extras:
            1. Se o usuário mencionar "falar com humano", "atendente" ou "demonstração", responda com:
               [CONTACT_REQUEST] Por favor, me informe seu nome:
            2. Se a mensagem do usuário contiver apenas um nome após [CONTACT_REQUEST], responda com:
               [CONTACT_PHONE] Agora, digite seu número de telefone com DDD (ex: 19999999999):
            3. Se a mensagem do usuário contiver um número de telefone após [CONTACT_PHONE], responda com:
               [CONTACT_CONFIRM] Seu número é {número}? Digite SIM para confirmar ou NÃO para corrigir.
            4. Use quebras de linha após cada ponto final
            5. Mantenha respostas com no máximo 3 frases
          `,
        },
        ...messages
      ],
    });

    const response = completion.choices[0].message.content;
    console.log("OpenAI response:", response);
    return NextResponse.json({ message: response });
  } catch (error: unknown) {
    const errorDetails = {
      name: error instanceof Error ? error.name : 'Unknown Error',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      cause: error instanceof Error ? (error.cause as string) : undefined
    };
    console.error("Detailed error:", errorDetails);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
