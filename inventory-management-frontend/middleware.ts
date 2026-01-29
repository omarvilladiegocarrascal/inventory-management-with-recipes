// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 👇 RUTAS PÚBLICAS (accesibles SIN login)
const PUBLIC_PATHS = [
  '/',
  '/login',
  '/register',
];

// 👇 PREFIJOS PRIVADOS (requieren login)
const PRIVATE_PREFIXES = [
  '/create-organization',
];

function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.includes(pathname);
}

function isPrivatePath(pathname: string) {
  return PRIVATE_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Leer token (cookie)
  const token = request.cookies.get('milogin')?.value;

  // 🟢 RUTA PÚBLICA → siempre pasa
  if (isPublicPath(pathname) && pathname !== "/register" && pathname !== "/login") {
    return NextResponse.next();
  }

  if(token && pathname === '/register'  ){
    const createOrganizationUrl = new URL('/create-organization', request.url);
    return NextResponse.redirect(createOrganizationUrl);
  }

   if(token && pathname === '/login'  ){
    const createOrganizationUrl = new URL('/create-organization', request.url);
    return NextResponse.redirect(createOrganizationUrl);
  }

  // 🔒 RUTA PRIVADA SIN TOKEN → redirige a login
  if (isPrivatePath(pathname) && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 🔐 RUTA PRIVADA CON TOKEN → pasa
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'],
};
