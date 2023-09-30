// import { NextRequest, NextResponse } from "next/server"
// import { getToken } from "next-auth/jwt"

import { NextResponse } from "next/server";


export async function middleware() {
  return NextResponse.next();
}

// export async function middleware(req: NextRequest) {
//   try {
//     const pathname = req.nextUrl.pathname;
//     const secret = req.headers.get("secret");
//     if (pathname.startsWith("/api/pages")) {
//       if (secret != process.env.API_SECRET) {
//         return NextResponse.json({ "message": "Unauthorized" }, { status: 401 });
//       } else {
//         return NextResponse.next();
//       }
//     }
//     if (pathname.startsWith("/api/admin") || pathname.startsWith("/admin")) {
//       if (req.method == "GET" && secret == process.env.API_SECRET) {
//         return NextResponse.next();
//       }

//       const token = await getToken({ req: req });

//       if (token) {
//         return NextResponse.next();
//       } else {
//         return NextResponse.redirect(new URL("/api/auth/signin?error=SessionRequired", req.url));
//       }
//     }

//     return NextResponse.next();
//   } catch (er) {
//     console.log("Middleware Error :  ", er)
//     return NextResponse.redirect(new URL("/api/auth/signin?error=SessionRequired", req.url),);
//   }

// }
// export const config = { matcher: ["/admin/:path*", "/user/:path*", "/api/test/:path*", "/api/pages/:path*", "/api/admin/:path*"] }

