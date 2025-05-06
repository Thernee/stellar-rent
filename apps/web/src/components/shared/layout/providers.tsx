'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { AuthProvider } from '~/hooks/auth/use-auth';
import { StellarProvider } from '~/hooks/stellar/stellar-context';

const ThemeProvider = dynamic(
  () => import('next-themes').then((mod) => ({ default: mod.ThemeProvider })),
  { ssr: false }
);

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      storageKey="stellar-rent-theme"
    >
      <StellarProvider>
        <AuthProvider>{children}</AuthProvider>
      </StellarProvider>
    </ThemeProvider>
  );
}
