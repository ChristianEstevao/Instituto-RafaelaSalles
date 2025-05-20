
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';
 
export default createMiddleware({
  // A lista de locales suportados
  locales,
  // Usado quando nenhum locale na URL
  defaultLocale,
  // Se definido como true, redirecionará para o locale padrão (ex: /about -> /pt/about)
  localePrefix: 'always'
});
 
export const config = {
  // Rotas que não devem ser internacionalizadas
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};
