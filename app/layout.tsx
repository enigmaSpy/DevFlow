import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

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
  description:
    `A community-driven platform for asking and answering programming questions.
     Get help, share knowledge, and collaborate with devel from around the world.
     Explore topics in web development, mobile app development, algorithms, data structures, and more.`,
     icons:{
      icon: "/images/site-logo.svg"
     }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
