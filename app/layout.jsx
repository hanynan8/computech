import { Rubik, Geist_Mono, Great_Vibes } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import LayoutClient from './layoutClient';
import { SITE } from '@/lib/site';

// ملحوظة أداء/توافق: كان هنا `export const runtime = 'edge';`
// لكن شلناه لأن صفحات المنتجات بقت تستورد lib/serverData.js (اللي بيستخدم
// mongoose) مباشرة جوه الـ Server Components، وmongoose محتاج Node.js APIs
// مش متاحة في edge runtime - وده سبب الخطأ:
//   "...mongoose/dist/browser.umd.js....default.connect is not a function"
// (يعني Next.js حاول يبني نسخة المتصفح من mongoose عشان الصفحة كانت
// هتتنفذ على edge). من غير السطر ده الصفحات كلها بترجع للـ Node.js
// runtime الافتراضي، وهو نفس الرنتايم اللي app/api/data/route.js أصلاً
// بيستخدمه مع mongoose من غير مشاكل.
export const experimental = {
  appDir: true,
  serverComponentsExternalPackages: [],
};
export const nextFontManifest = {};

// Google fonts مع تحسين الأداء
const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
  display: 'swap',
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});
const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});
import { Amiri } from 'next/font/google';

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
});
// ----- METADATA — كمبيوتك أسوان (القيم من lib/site.js) -----
const SITE_TITLE = `${SITE.fullName} | لابتوبات وأجهزة كمبيوتر جديدة واستيراد`;
export const metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE.fullName}`,
  },
  description:
    'كمبيوتك في أسوان: بيع وشراء أجهزة الكمبيوتر واللابتوب (جديد واستيراد فرز أول) بضمان، مع مكونات وشاشات وإكسسوارات — واطلب عبر واتساب.',
  // الأيقونة من لوجو كمبيوتك (ملف /public/logo.png — شوف SITE.logo في lib/site.js)
  icons: {
    icon: SITE.logo,
    shortcut: SITE.logo,
    apple: SITE.logo,
  },
  keywords: [
    'كمبيوتك',
    'Compu Tech',
    'كمبيوتك أسوان',
    'كمبيوتر أسوان',
    'لابتوبات أسوان',
    'أجهزة كمبيوتر',
    'مكونات كمبيوتر',
    'إكسسوارات',
    'شاشات',
    'طابعات',
    'أجهزة استيراد فرز أول',
    'تجميعات PC',
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  publisher: SITE.fullName,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: {
      default: SITE_TITLE,
      template: `%s | ${SITE.fullName}`,
    },
    description:
      'تسوّق لابتوبات ومكونات وإكسسوارات من كمبيوتك في أسوان، واطلب مباشرة عبر واتساب.',
    url: SITE.url,
    siteName: SITE.fullName,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: `${SITE.fullName} - أحدث المنتجات`,
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
};

// ====== export viewport ======
export const viewport = {
  themeColor: '#0891b2',
  width: 'device-width',
  initialScale: 1,
};

// ====== JSON-LD structured data ======
const sameAs = [SITE.facebook, SITE.instagram].filter(Boolean);
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ComputerStore',
      '@id': `${SITE.url}/#organization`,
      name: SITE.fullName,
      alternateName: SITE.nameEn,
      url: SITE.url,
      sameAs,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city,
        addressCountry: 'EG',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: `+${SITE.whatsappNumber}`,
          contactType: 'customer service',
          areaServed: 'EG',
          availableLanguage: ['ar', 'en'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.fullName,
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${amiri.variable} ${greatVibes.variable}`}
    >
      <body
        className={`${rubik.className} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <LayoutClient>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LayoutClient>

        {/* JSON-LD: غيّر القيم في structuredData أعلاه لو حبيت */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}