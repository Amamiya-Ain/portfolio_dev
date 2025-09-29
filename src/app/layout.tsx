// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css"; // あれば

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
