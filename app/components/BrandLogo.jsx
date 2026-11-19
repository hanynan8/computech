'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

// لوجو كمبيوتك: بيقرا من SITE.logo (ملف داخل /public). لو الملف مش موجود بيختفي
// تلقائيًا ويفضل اسم المتجر النصي ظاهر، فمفيش صورة مكسورة.
export default function BrandLogo({ className = 'h-10 sm:h-12 w-auto' }) {
  const [failed, setFailed] = useState(false);
  if (!SITE.logo || failed) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={SITE.logo}
      alt={`لوجو ${SITE.fullName}`}
      className={`${className} object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
