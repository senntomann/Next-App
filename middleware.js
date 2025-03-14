import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjExMUBnbWFpbC5jb20iLCJleHAiOjE3NDIwNDkwMDh9.HhVPhjW35hgKObE0kSfaRKVkS91RLgMlql4cY6aQZBE"
    //const token = await request.headers.get("Authorization")?.split("")[1];
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJWT = await jwtVerify(token, secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "トークンが正しくないのでログインしてください"})
    }
}

export const config = {
    matcher: ["/api/item/create", "/api/item/delete/:path*", "/api/item/update/:path*" ],
}