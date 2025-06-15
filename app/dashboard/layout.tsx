import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "FinFly - Dashboard",
  description: "A modern finance app to manage your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.variable} antialiased`}>
        <div className="flex bg-[#0B1D51] min-h-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
