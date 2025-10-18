'use client';

import { useEffect } from 'react';
import { Button } from '../../components/ui/button'; // or '../components/ui/button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('❌ Global Error:', error);
  }, [error]);

  return (
    <html>
      <body className="flex h-screen flex-col items-center justify-center gap-4 bg-red-50">
        <h2 className="text-xl font-semibold text-red-600">
          Something went wrong 😢
        </h2>
        <p className="text-gray-600">{error.message}</p>
        <Button onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  );
}
