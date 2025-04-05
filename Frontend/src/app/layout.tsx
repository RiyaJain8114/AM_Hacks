'use client';

import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Header without Clerk logic */}
            <header className="flex justify-between items-center p-4 gap-4 h-16">
              <div>
                {/* You can add your custom login/logout UI or leave it blank */}
              </div>
            </header>

            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
