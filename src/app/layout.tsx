import type { Metadata } from "next";

import { robotoCondensed } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "React Movies - NextJS",
  description:
    "Web app where you can find trending and upcoming movies, movies and tv shows or anime too",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-800 ${robotoCondensed.className}`}>
        {children}
      </body>
    </html>
  );
}
