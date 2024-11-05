'use client';

import { NextUIProvider } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </SessionProvider>
    </NextUIProvider>
  );
}
