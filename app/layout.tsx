import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    template: "%s GoStartup",
    default: "GoStartup",
  },
  description:"Next-js Website"
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased overflow-x-hidden `}>
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
