import type { Metadata } from "next";
import { SessionProvider } from "@/components/shared/Provider/SessionProvider";
import { QueryProvider } from "@/components/shared/Provider/QueryProvider";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Últimas Noticias de Argentina y el Mundo - Mundo al Día",
  description: "Mundo al Día",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NextTopLoader />
        <SessionProvider>
          <QueryProvider>{children}</QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
