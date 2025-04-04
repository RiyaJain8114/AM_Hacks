'use client';

import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

// Debugging: Check if the environment variable is loaded
console.log('Clerk Publishable Key:', process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}>
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              {/* Header without Role-Based Login and Alumni Association Heading */}
              <header className="flex justify-between items-center p-4 gap-4 h-16">
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>

              {children}
            </ThemeProvider>
          </AuthProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

