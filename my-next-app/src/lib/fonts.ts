import { Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const fontHeading = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-heading',
});

export const fontBody = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-body',
});

export const fontDisplay = localFont({
  src: '../../public/fonts/DFVN-Abygaer.otf',
  display: 'swap',
  variable: '--font-display',
  weight: '400',
});
