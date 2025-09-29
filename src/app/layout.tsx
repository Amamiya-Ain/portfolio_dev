// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css"; // あれば

export const metadata = {
  title: "Amamiya-Ain | Portfolio",
  description: "C / TypeScript / AtCoder Green。作品のソースとダウンロード。",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-project.vercel.app"),
  openGraph: {
    title: "Amamiya-Ain | Portfolio",
    description: "C / TS / Heuristic。作品のソースとDL。",
    images: ["/og.png"], // public/og.png を用意
  },
  twitter: { card: "summary_large_image" },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
