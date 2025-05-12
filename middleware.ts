import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const origin = request.nextUrl.origin
    const userAgent = request.headers.get('user-agent')
    const vercelUrlPattern = new RegExp("^https://datafish-[\\w-]+-luciletrps-projects\\.vercel\\.app/?$");


    if(origin === "http://localhost:3000" && userAgent && userAgent.startsWith("PostmanRuntime")){
        return NextResponse.next()
    }

    if(origin === "https://datafish.vercel.app/" || vercelUrlPattern.test(origin)) {
        return NextResponse.next()
    }

   return new NextResponse('Forbidden', { status: 403 });
}

export const config = {
    matcher: '/api/:path*',
}