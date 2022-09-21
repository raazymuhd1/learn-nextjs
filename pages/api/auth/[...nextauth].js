import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_KEY,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    // database: process.env.LOCAL_DB_URL,
    // session: {
    //     jwt: true
    // },
    // jwt: {
    //     secret: "mycutiecat"
    // }
})
