import Navbar from './_navClient';
import { NAV_DATA } from '@/lib/site';

// الناف بار ستاتك بالكامل: الاسم من SITE.name وروابط القائمة من NAV_DATA في lib/site.js.
// اللوجو من SITE.logo (ملف /public/logo.png).
export default function Page() {
  return <Navbar navbarData={NAV_DATA} />;
}
