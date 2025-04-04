'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInSocietyHead() {
  return <SignIn redirectUrl="/society-head/dashboard" />;
}
