import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SidebarProvider } from "./_components/ui/sidebar";
import AppSidebar from "./_components/sidebar";
import { Toaster } from "./_components/ui/sonner";

export const metadata: Metadata = {
  title: "EstoquePro",
  description: "Dashboard De Vendas",
};

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex h-screen flex-1 overflow-hidden">{children}</div>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
