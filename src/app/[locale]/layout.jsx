
import { locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
 
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
 
export default async function LocaleLayout({ children, params: { locale } }) {
  // Validar que o locale solicitado é suportado
  if (!locales.includes(locale)) notFound();
 
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
