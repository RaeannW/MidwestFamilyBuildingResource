import { Nunito_Sans } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Midwest Family Building Resource",
  description:
    "Free, unbiased resources and micro-grants for families in Missouri and Illinois.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
