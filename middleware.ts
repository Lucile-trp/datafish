import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getJwtToken, getRoles, canAccess } from './lib/auth/jwt';

export function middleware(request: NextRequest) {
    const token = getJwtToken(request)

    if(!token){
        return new NextResponse('Missing Authorization header', { status: 400 })
    }

    const roles = getRoles(token as string)
    const access = canAccess(request.nextUrl.pathname, roles, request.method)

    if (access) {
        return NextResponse.next()
    }else {
        return new NextResponse('Forbidden', { status: 403 });
    }
}

export const config = {
    matcher: '/api/v1/fish/:path*',
}