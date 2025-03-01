import {NextResponse} from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req) {
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    // console.log(url , pathname)

    if (pathname.startsWith("/profile")) {
        // console.log(req.cookies.get("refreshToken"))
        const user = await middlewareAuth(req)
        if (!user) return NextResponse.redirect(new URL("/auth", url));
    }

    if (pathname.startsWith("/admin")) {
        const user = await middlewareAuth(req);
        if (!user) return NextResponse.redirect(new URL("/auth", url));
        if (user && user.role !== "ADMIN")
            return NextResponse.redirect(new URL("/", url))

    }

}



export const config = {
    matcher: ["/admin/:path*", "/profile/:path*"],
};