import jwt from "jsonwebtoken"

export function createMagicLink(email: string) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "15m" })
    return `http://${process.env.NUXT_PUBLIC_HOSTURL ?? "localhost:3000"}/api/auth/callback?token=${token}` // or your deployed domain
}

export function verifyMagicToken(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!) as { email: string }
}
