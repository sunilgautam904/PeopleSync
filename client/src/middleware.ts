import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/sign-in';

  const token = request.cookies.get('next-auth.session-token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/sign-in', request.nextUrl))
  }
    
}

export const config = {
  matcher: [
    '/',
    '/sign-in',
    '/profile',
  ]
}