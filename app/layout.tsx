import type { Metadata } from "next";
import "./globals.css";
import './ethos/EthosStyles.css';
import EthosRoot from './ethos/EthosRoot';

export const metadata: Metadata = {
  title: "EthosQuest",
  description: "Premium, human-led executive coaching for senior leaders navigating complexity, transitions, and high-stakes decisions.",
  openGraph: { title: 'EthosQuest', images: ['https://www.ethosquest.com/brand/logos/ethos_quest-primary-2026-06-23.png'] },
  twitter: { card: 'summary_large_image', title: 'EthosQuest', images: ['https://www.ethosquest.com/brand/logos/ethos_quest-primary-2026-06-23.png'] },
  icons: {
    icon: "https://ethosquest.com/favicon.svg",
    shortcut: "https://ethosquest.com/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet" /></head>
      <body><EthosRoot>{children}</EthosRoot></body>
    </html>
  );
}
