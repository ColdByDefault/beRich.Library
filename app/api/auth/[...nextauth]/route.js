import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@utils/database";
import User from "@models/user";
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId: process.env.NEXTAUTH_GITHUB_ID,
            clientSecret: process.env.NEXTAUTH_GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectToDatabase();

                // Ensure credentials are passed
                if (!credentials.email || !credentials.password) {
                    throw new Error("Email and password are required.");
                }

                // Find the user in the database
                const user = await User.findOne({ email: credentials.email }).select("+password");
                if (!user) {
                    throw new Error("No user found with this email.");
                }

                // Compare provided password with stored hash
                const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordCorrect) {
                    throw new Error("Invalid email or password.");
                }

                return { id: user._id, email: user.email, username: user.username };
            },
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl; // Redirect to the main page if no specific URL is set
        },
        async session({ session }) {
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ account, profile }) {
            if (account.provider === "google" || account.provider === "github") {
                try {
                    await connectToDatabase();
                    const userExists = await User.findOne({ email: profile.email });
                    if (!userExists) {
                        await User.create({
                            email: profile.email,
                            username: profile.name.replace(" ", "").toLowerCase(),
                            image: profile.picture,
                        });
                    }
                } catch (error) {
                    console.error("Error during OAuth sign-in:", error.message);
                    return false;
                }
            }
            return true;
        },
    },    
});

export { handler as GET, handler as POST };
