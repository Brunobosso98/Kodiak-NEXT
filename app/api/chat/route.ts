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
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1]?.content; // Última pergunta do usuário

    // 🔹 1️⃣ Ler o prompt do arquivo .txt
    const promptText = loadPrompt();

    // 🔹 2️⃣ Buscar informações externas (site e Instagram)
    // const siteData = await fetchWebsiteData();
    // const instaData = await fetchInstagramData();

    // 🔹 3️⃣ Criar um contexto com todas as informações coletadas
    const contexto = `### PROMPT BASE:\n${promptText}`;
    // \n\n### Informações do site:\n${siteData.substring(0, 2000)}\n\n### Instagram:\n${instaData.substring(0, 2000)}

    // 🔹 4️⃣ Enviar a pergunta para a OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            Instruções do Bear Assistente:
            ${promptText}
            
            Regras extras:
            1. Se o usuário pedir valores, transfira imediatamente
            2. Use quebras de linha após cada ponto final
            3. Mantenha respostas com no máximo 3 frases
          `,
        },
        ...messages
      ],
    });

    return NextResponse.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
