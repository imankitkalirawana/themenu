import { role } from '@/lib/interface';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    id: string;
    role: role;
  }

  interface User {
    _id: string;
    role: role;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: role;
  }
}
