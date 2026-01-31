import {getRequestConfig} from 'next-intl/server';

const locales = ['tr', 'en'];

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  
  // Ensure that the incoming locale is valid
  if (!locale || !locales.includes(locale)) {
    locale = 'tr'; // default locale
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
}); 