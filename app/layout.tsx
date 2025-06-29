import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { SessionProvider, useSession } from "next-auth/react";
import {auth} from "@/auth"

const inter = localFont({
  src: "./Fonts/Inter/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./Fonts/Space_Grotesk/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300",
});
export const metadata: Metadata = {
  title: "DevFlow",
  description: `A community-driven platform for asking and answering programming questions.
     Get help, share knowledge, and collaborate with devel from around the world.
     Explore topics in web development, mobile app development, algorithms, data structures, and more.`,
  icons: {
    icon: "/images/site-logo.svg",
  },
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body
          className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;