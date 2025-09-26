// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "../data/portfolioData";
import AnimationProvider from "../components/AnimationProvider"; // Import the provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${portfolioData.name} - Portfolio`,
  description: `Portfolio professionnel de ${portfolioData.name}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimationProvider>
          {" "}
          {/* Wrap with AnimationProvider */}
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
