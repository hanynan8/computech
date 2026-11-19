import Footer from './_footClient';
import { SITE, WHATSAPP_URL } from '@/lib/site';

// الفوتر ستاتك بالكامل (من غير قاعدة بيانات): كل القيم من lib/site.js.
// الحقول الفاضية (إيميل / مواعيد عمل / إنستجرام) بتختفي لحد ما تتملي.
const FOOTER_DATA = {
  company: {
    name: SITE.name,
    subtitle: `${SITE.nameEn} – ${SITE.city}`,
    description:
      'متجرك لأجهزة الكمبيوتر واللابتوبات في أسوان — أجهزة جديدة واستيراد فرز أول، بضمان.',
    year: new Date().getFullYear(),
  },
  socialLinks: [
    SITE.facebook && { platform: 'Facebook', icon: 'FaFacebook', url: SITE.facebook },
    SITE.instagram && { platform: 'Instagram', icon: 'FaInstagram', url: SITE.instagram },
    { platform: 'WhatsApp', icon: 'FaWhatsapp', url: WHATSAPP_URL },
  ].filter(Boolean),
  sections: [
    {
      title: 'روابط سريعة',
      links: [
        { text: 'الرئيسية', href: '/' },
        { text: 'من نحن', href: '/aboutus' },
        { text: 'اتصل بنا', href: '/contact' },
        { text: 'موقعنا', href: '/location' },
      ],
    },
    {
      title: 'الأقسام',
      links: [
        { text: 'لابتوب', href: '/laptop' },
        { text: 'مكونات كمبيوتر', href: '/component' },
        { text: 'تجميعات PC', href: '/pc-builds' },
        { text: 'اكسسوارات', href: '/accessories' },
        { text: 'شاشات', href: '/monitors' },
        { text: 'طابعات', href: '/printers' },
        { text: 'وسائط تخزين', href: '/storage-devices' },
        { text: 'نقاط البيع', href: '/pos' },
        { text: 'منتجات أخرى', href: '/other' },
      ],
    },
    {
      title: 'تواصل معنا',
      content: {
        address: SITE.address,
        phone: SITE.phoneDisplay,
        email: SITE.email || '',
        workingHours: SITE.workingHours || '',
      },
    },
  ],
  bottomLinks: [
    { text: 'من نحن', href: '/aboutus' },
    { text: 'اتصل بنا', href: '/contact' },
  ],
};

export default function Page() {
  return <Footer footerData={FOOTER_DATA} loading={false} />;
}
