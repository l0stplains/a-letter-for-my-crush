import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "A Letter for My Crush",
  description: "A date invitation letter to my crush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
