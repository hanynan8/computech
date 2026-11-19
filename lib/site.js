// lib/site.js
// مصدر واحد لبيانات "كمبيوتك – أسوان" الثابتة في الكود (واتساب، اللينكات، الخريطة، الدومين).
// ⚠️ القيم اللي عليها [PLACEHOLDER] مؤقتة ولازم تتراجع قبل النشر.
// الدومين: حط NEXT_PUBLIC_SITE_URL في .env.local (مثال: https://your-domain.com).

export const SITE = {
  name: 'كمبيوتك',
  nameEn: 'Compu Tech',
  fullName: 'كمبيوتك أسوان',
  city: 'أسوان',
  tagline: 'لابتوبات وأجهزة كمبيوتر جديدة واستيراد فرز أول في أسوان',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),

  // رقم المتجر المنشور في الأدلة التجارية وخرائط جوجل (01115915118).
  // ⚠️ لم يتأكد إنه واتساب — راجعه. الصيغة دولية بدون + .
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '201115915118',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '01115915118',
  // [PLACEHOLDER]
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
  // [PLACEHOLDER] مواعيد العمل (مثال: 'يوميًا من 10 ص إلى 10 م') — فاضية = مش بتظهر
  workingHours: process.env.NEXT_PUBLIC_WORKING_HOURS || '',
  // العنوان المسجل على خرائط جوجل. (دليل 2023 ذكر: ألفا مول، الدور الأرضي، شارع المطار — أكّد العنوان الحالي)
  address: 'بجوار إدارة المرور – ممر مطعم كشري الصفوة – عمارة السلواوي، أسوان',

  // اللوجو: حط الملف في /public باسم logo.png (أو غيّر المسار هنا). لو مش موجود بيظهر اسم المتجر نصًا.
  logo: '/logo.png',

  facebook: 'https://www.facebook.com/Compu1442/', // حقيقي (من العميل)
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '', // [PLACEHOLDER]

  // [PLACEHOLDER] إحداثيات الفرع — حاليًا وسط أسوان تقريبًا لحد ما تتحدد
  mapLat: Number(process.env.NEXT_PUBLIC_MAP_LAT || 24.0889),
  mapLng: Number(process.env.NEXT_PUBLIC_MAP_LNG || 32.8998),
};

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}`;
export const MAP_URL = `https://www.google.com/maps?q=${SITE.mapLat},${SITE.mapLng}`;

// روابط الناف بار (ستاتك). "المنتجات" بتفتح القائمة المنسدلة لأقسام المنتجات.
export const NAV_DATA = {
  company: { name: SITE.name },
  navLinks: [
    { text: 'الرئيسية', href: '/' },
    { text: 'المنتجات', href: '/laptop' },
    { text: 'من نحن', href: '/aboutus' },
    { text: 'اتصل بنا', href: '/contact' },
    { text: 'موقعنا', href: '/location' },
  ],
};
