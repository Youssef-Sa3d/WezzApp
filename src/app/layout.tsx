import { type Metadata } from "next";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";



export const metadata: Metadata = {
  title: "WezzApp",
  description: "Send anonymous messages to WhatsApp numbers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased min-h-screen bg-white text-black">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}