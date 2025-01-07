import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from './lib/supabase/middleware'
import { getUserProfile } from './utils/data';

export async function middleware(request: NextRequest) {
    const {user, profile} = await getUserProfile();

    if (!user && (request.nextUrl.pathname.startsWith('/user'))) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (user && (request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup"))) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (profile?.role !== "admin" && request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // update user's auth session
    await updateSession(request)
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}

