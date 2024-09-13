import type { Metadata } from "next";
import "./globals.css";
import "./container.css";

export const metadata: Metadata = {
  title: "5e 2024 Cheatsheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <div className="footer">
        Inspired by the{" "}
        <a href="https://crobi.github.io/dnd5e-quickref/preview/quickref.html">
          dnd5e-quickref
        </a>
      </div>
    </html>
  );
}
