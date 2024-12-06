import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide",
  description: "Slide in anyone's dms babyyy!!",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
          suppressHydrationWarning
          className={inter.className}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
