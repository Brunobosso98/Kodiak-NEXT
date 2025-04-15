import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ["latin"],
  display: 'swap',
  weight: ['800'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: "Kodiak ERP - Gestão Inteligente para sua Indústria",
  description: "Sistema ERP completo para indústrias com automação, controle e eficiência integrados.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1B1AFF",
  robots: "index, follow",
  openGraph: {
    title: "Kodiak ERP - Gestão Inteligente para sua Indústria",
    description: "Sistema ERP completo para indústrias com automação, controle e eficiência integrados.",
    url: "https://kodiak-erp.vercel.app",
    siteName: "Kodiak ERP",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/favicon.webp" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}