import type { Metadata } from "next";
import "./globals.css";

// TODO: add the font

export const metadata: Metadata = {
  title: "Ahmed Official Portfolio",
  description: "this is the Official release of Ahmed Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
