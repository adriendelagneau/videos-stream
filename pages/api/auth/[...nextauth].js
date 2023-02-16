import axios from 'axios';
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  
  secret: process.env.JWT_SECRET,
 
  callbacks: {
      
    async signIn({ account, profile }) {
      if (account.provider === "google" && profile.email_verified && profile.email.endsWith("@gmail.com")) {
        const existingUser = await axios.post(`${process.env.NEXTAUTH_URL}/api/user/${profile.email}`);      
        if (existingUser.data[0]?.email === undefined) {
         await axios.post(`${process.env.NEXTAUTH_URL}/api/user`, { name: profile.name, email: profile.email });
        }else {
          console.log('user allready exist');
        }
      }
      return true; 
    },
    async session({ session, user, token }) {
      const existingUser = await axios.post(`${process.env.NEXTAUTH_URL}/api/user/${session.email}`);
        if (existingUser.data[0]._id) {
          session.user.id = existingUser.data[0]._id;
        }
      return session;
    }
  }
}



export default NextAuth(authOptions);