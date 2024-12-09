import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css";

import ReduxProvider from "@/providers/redux-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";


const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate DMs and comments on Instagram",
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
          className={jakarta.className}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </ReduxProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
