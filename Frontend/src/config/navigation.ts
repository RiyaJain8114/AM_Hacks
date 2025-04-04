// navigation.tsx
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

export const navigation = {
  common: {
    dashboard: {
      path: '/dashboard',
      title: 'Dashboard',
    },
  },
  collegeAuthority: {
    dashboard: {
      path: '/college-authority/dashboard',
      title: 'Authority Dashboard',
    },
    resources: {
      path: '/college-authority/resources',
      title: 'Resource Management',
    },
    societies: {
      path: '/college-authority/societies',
      title: 'Societies Management',
    },
    approvals: {
      path: '/college-authority/approvals',
      title: 'Event Approvals',
    },
    societyApprovals: {
      path: '/college-authority/society-approvals',
      title: 'Society Approvals',
    },
    analytics: {
      path: '/college-authority/analytics',
      title: 'Analytics',
    },
    policies: {
      path: '/college-authority/policies',
      title: 'Policies',
    },
  },
  societyHead: {
    dashboard: {
      path: '/society-head/dashboard',
      title: 'Society Dashboard',
    },
    events: {
      create: {
        path: '/society-head/events/create',
        title: 'Create Event',
      },
      myEvents: {
        path: '/society-head/events/my-events',
        title: 'My Events',
      },
    },
    society: {
      profile: {
        path: '/society-head/society-profile',
        title: 'Society Profile',
      },
    },
    resources: {
      path: '/society-head/resources',
      title: 'Resources',
    },
  },
  auth: {
    signIn: {
      societyHead: {
        path: '/sign-in/society-head',
        title: 'Login as Society Head',
      },
      collegeAuthority: {
        path: '/sign-in/college-authority',
        title: 'Login as College Authority',
      },
    },
    components: {
      user: {
        signedIn: (
          <SignedIn>
            <UserButton />
          </SignedIn>
        ),
        signedOut: (
          <SignedOut>
            <Link href="/sign-in/society-head">
              <button>Login as Society Head</button>
            </Link>
            <Link href="/sign-in/college-authority">
              <button>Login as College Authority</button>
            </Link>
          </SignedOut>
        ),
      },
    },
  },
};
