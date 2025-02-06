import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/providers/store-provider";
import Modal from "@/components/modal";

// TODO: add the font

export const metadata: Metadata = {
  title: "Ahmed Official Portfolio",
  description: "this is the Official release of Ahmed Portfolio",
  icons: {
    icon: "/meInFormal.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-300 text-lg text-gray-800`} 
      >
        <StoreProvider>
            {children}

            <Modal />
        </StoreProvider>
      </body>
    </html>
  );
}

