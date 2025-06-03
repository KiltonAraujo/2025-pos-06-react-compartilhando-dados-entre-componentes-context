import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TarefasProvider } from "@/data/ContextTarefa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AppWebReact - Conceitos introdutórios",
  description: "Aplicação web react para codar conceitos introdutórios da tecnologia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <TarefasProvider>
          {children}
        </TarefasProvider>
      </body>
    </html>
  );
}
