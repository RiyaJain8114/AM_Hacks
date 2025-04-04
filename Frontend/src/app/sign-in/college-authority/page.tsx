'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInCollegeAuthority() {
  return <SignIn redirectUrl="/college-authority/dashboard" />;
}
