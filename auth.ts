import credentials from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import Client from '@/models/Client';
import { InvalidCredentialsError } from './authClass';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      async authorize(credentials) {
        if (credentials.role === 'client') {
          await connectDB();
          let client = null;
          if (!credentials?.id || !credentials?.password || !credentials.role) {
            throw new InvalidCredentialsError();
          }
          // @ts-ignore
          if (!credentials.id.includes('@')) {
            client = await Client.findOne({ phone: credentials.id });
          } else {
            client = await Client.findOne({ email: credentials.id });
          }
          if (!client) {
            throw new InvalidCredentialsError();
          }
          if (typeof credentials.password !== 'string') {
            throw new InvalidCredentialsError();
          }
          const isValid = await bcrypt.compare(
            credentials!.password,
            client.password
          );
          if (!isValid) {
            throw new InvalidCredentialsError();
          }
          return client;
        }
        if (credentials.role === 'admin' || credentials.role === 'moderator') {
          await connectDB();
          let user = null;
          if (!credentials?.id || !credentials?.password || !credentials.role) {
            throw new InvalidCredentialsError();
          }
          if (
            credentials.role !== 'admin' &&
            credentials.role !== 'moderator'
          ) {
          }
          // @ts-ignore
          if (!credentials.id.includes('@')) {
            user = await User.findOne({ phone: credentials.id });
          } else {
            user = await User.findOne({ email: credentials.id });
          }
          if (!user) {
            throw new InvalidCredentialsError();
          }
          if (typeof credentials.password !== 'string') {
            throw new InvalidCredentialsError();
          }
          const isValid = await bcrypt.compare(
            credentials!.password,
            user.password
          );
          if (!isValid) {
            throw new InvalidCredentialsError();
          }
          return user;
        }
        throw new InvalidCredentialsError();
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user._id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    }
  }
});
