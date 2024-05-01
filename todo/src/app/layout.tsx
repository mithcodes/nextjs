import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "../app/redux/store";
import { Children } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
        {/* <StoreProvider>{children}</StoreProvider> */}
        {children}
      </body>
    </html>
  );
}