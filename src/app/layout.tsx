// src/app/layout.tsx
import { PlasmicRootProvider } from '@plasmicapp/react-web';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <PlasmicRootProvider>
          {children}
        </PlasmicRootProvider>
      </body>
    </html>
  );
}
