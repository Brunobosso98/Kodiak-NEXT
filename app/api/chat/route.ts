export const dynamic = "force-dynamic"; // Garante que a API sempre será SSR

import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
// import cheerio from "cheerio"; EXTRAI apenas o HTML sem informações inúteis.

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log("🔑 OpenAI API Key:", process.env.OPENAI_API_KEY ? "Carregada" : "NÃO CARREGADA!");


// Função para carregar o JSON local com as informações da empresa
const loadCompanyData = (): any => {
  const filePath = path.join(process.cwd(), "data", "companyData.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
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

    // 1️⃣ Primeiro, verificar se a pergunta já está no JSON local
    const companyData = loadCompanyData();
    if (companyData.faq[lastUserMessage]) {
      return NextResponse.json({ message: companyData.faq[lastUserMessage] });
    }

    // 2️⃣ Se não estiver no JSON, buscar dados do site e Instagram
    const siteData = await fetchWebsiteData();
    const instaData = await fetchInstagramData();

    // Criar um contexto com as informações coletadas
    const contexto = `Informações do site: ${siteData.substring(0, 2000)}\nInstagram: ${instaData.substring(0, 2000)}`;

    // 3️⃣ Enviar a pergunta para a OpenAI, incluindo o contexto coletado
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é um assistente da Kodiak ERP, especializado em ajudar clientes. 
          Aqui estão algumas informações para te ajudar a responder:\n${contexto}`,
        },
        ...messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
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
