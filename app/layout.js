import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monkey Score",
  description:
    "Discover Monkey Score, the AI-powered exam score prediction platform that helps students and professionals optimize their performance. Analyze study habits, manage stress, and get personalized score forecasts. Perfect for academic success and exam preparation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/fav.png" sizes="16x16" type="image/png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
