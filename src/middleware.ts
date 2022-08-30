import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export default async function middleware(req: NextRequest) {
  const jwt = req.cookies.get('userToken');
  console.log(jwt);

  const { pathname, origin } = req.nextUrl;

  if (pathname.includes('/home')) {
    if (jwt === undefined) {
      return NextResponse.redirect(`${origin}/`);
    }
    try {
      await jwtVerify(jwt, new TextEncoder().encode(process.env.SECRET));
      return NextResponse.next();
    } catch (e: any) {
      return NextResponse.redirect(`${origin}/error`);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/home',
};
