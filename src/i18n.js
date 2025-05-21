
import {notFound} from 'next/navigation';
 
export const locales = ['en', 'pt'];
export const defaultLocale = 'pt';
 
export function getLocalePartsFrom({pathname}) {
  const pathnameParts = pathname.split('/');
  const locale = pathnameParts[1];
  const isValidLocale = locales.some((cur) => cur === locale);
  
  if (isValidLocale) {
    return {
      locale,
      pathname: pathnameParts.slice(2).join('/') || '/'
    };
  }
  
  return {
    locale: defaultLocale,
    pathname
  };
}
 
export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
