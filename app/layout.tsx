import type { Metadata } from "next";
import { Geist } from "next/font/google";
import {ThemeProvider} from "next-themes"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cristobal Elizarraraz Rios Portfolio",
  description: "A personal portfolio website built using next.js",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const name="Cristobal Elizarraraz Rios"
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header name={name}/>

          <main className="flex-1">
            {children}
          </main>

          <Footer name={name}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
