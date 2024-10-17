import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: "./fonts/HelveticaNeueLight.ttf",
  variable: "--font-helvetica-neue",
  // weight: "100 900",
});

export const metadata: Metadata = {
  title: "BATA Party",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.className}`}
      >
          {children}
      </body>
    </html>
  );
}
