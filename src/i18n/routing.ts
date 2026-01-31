import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // Desteklenen diller
  locales: ['tr', 'en'],
  
  // Varsayılan dil
  defaultLocale: 'tr'
});

// Navigation fonksiyonlarını oluştur
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing); 