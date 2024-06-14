import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navigasi/Navbar";

export const metadata: Metadata = {
  title: "Todo Savings by KYRIZKY",
  description: "Manage Finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
