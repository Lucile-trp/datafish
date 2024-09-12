// types/next-auth.d.ts

import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      // Ajout d'une propriété personnalisée
      role?: string;
    };
  }

  interface JWT {
    /** Ce champ est toujours présent */
    sub: string;
    /** Ajout de champs personnalisés */
    id?: string;
    role?: string;
    email?: string;
  }
}
