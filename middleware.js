import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc0MTk1NDA0M30.arLznYnk2u2f4AjVCUx61i9QB3v3FYfT_7q5vXu_RR8"
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