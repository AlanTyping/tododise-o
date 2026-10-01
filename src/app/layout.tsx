import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Playfair_Display({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const bodyFont = Work_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Todo Diseño & Más | Regalos personalizados", template: "%s | Todo Diseño & Más" },
  description: "Vasos, termos, mates y regalos personalizados para cada momento especial. Hecho con intención en Argentina.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="es" data-scroll-behavior="smooth" className={`${displayFont.variable} ${bodyFont.variable}`}><body>{children}</body></html>;
}
