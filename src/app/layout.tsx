import type { Metadata } from "next";
import { Rasa } from "next/font/google";
import "./styles.css";
import { Analytics } from "@vercel/analytics/react";

const rasa = Rasa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KL Facilties",
  description: "Consultoria e Terceirização Offshoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rasa.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
