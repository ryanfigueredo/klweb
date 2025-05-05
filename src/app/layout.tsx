import type { Metadata } from "next";
import { Rasa } from "next/font/google";
import "./styles.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const rasa = Rasa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KL Facilities",
  description: "Consultoria e Terceirização Offshoring",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={rasa.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
