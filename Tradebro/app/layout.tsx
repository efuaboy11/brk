import type { Metadata } from "next";
import { Hanken_Grotesk, Moderustic } from "next/font/google";

import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});


const moderustic = Moderustic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-moderustic",
});


export const metadata: Metadata = {
  title: "veloxarion - Grow Your Investment",
  description: "Start your real estate investment journey with confidence.",
  icons: {
    icon: {
      url: "/favicon.ico?v=2",
      type: "image/x-icon",
      sizes: "32x32",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${hankenGrotesk.variable} ${moderustic.variable}`}>
        {children}
      </body>
    </html>
  );
}
