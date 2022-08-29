import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export default function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  const { url } = req;

  if (url.includes('/home')) {
    if (jwt === undefined) {
      return NextResponse.redirect('/');
    }
    try {
      verify(jwt, process.env.SECRET);
      return NextResponse.next();
    } catch (e: any) {
      return NextResponse.redirect('/error');
    }
  }

  return NextResponse.next();
}
