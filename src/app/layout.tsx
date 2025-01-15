import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from 'next/font/local';
import "../styles/globals.css";


// Custom font to display the clock
const customFont = localFont({
  src: [
    {
      path: '../../public/fonts/Technology.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Technology-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom'
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realtime Clock App",
  description: "A realtime clock application using WebSocket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${customFont.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
