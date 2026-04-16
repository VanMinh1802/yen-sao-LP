import { Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';

export const fontHeading = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--next-font-heading',
});

export const fontBody = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--next-font-body',
});

export const fontDisplay = localFont({
  src: '../../public/fonts/DFVN-Abygaer.otf',
  display: 'swap',
  variable: '--next-font-display',
  weight: '400',
});
