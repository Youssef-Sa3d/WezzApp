import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var theme = localStorage.getItem('theme');
                    if (!theme) {
                      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                      theme = prefersDark ? 'dark' : 'light';
                      localStorage.setItem('theme', theme);
                    }
                    document.documentElement.setAttribute('data-theme', theme);
                  } catch (e) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                })();
              `,
            }}
          />
        </head>
        <body className="min-h-screen bg-white text-black flex flex-col" suppressHydrationWarning>
          <Header />
          <main className=" flex flex-col">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}