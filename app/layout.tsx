import type { Metadata } from "next";
// import NextTopLoader from 'nextjs-toploader';
import {Roboto} from "next/font/google"
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
}); 

export const metadata: Metadata = {
  title: "Mundo Al Día - Sitio Web de Noticias al día",
  description: "Noticias al día",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
