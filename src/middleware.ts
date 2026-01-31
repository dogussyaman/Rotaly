import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Middleware'in çalışacağı yollar
  matcher: ['/', '/(tr|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)', '/((?!api|_next|_vercel|.*\\..*).*)', '/dashboard/:path*', '/admin/:path*']
}; 