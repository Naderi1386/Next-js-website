import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    template: "%s GoStartup",
    default: "GoStartup",
  },
};

interface RootLayoutPropsType {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
