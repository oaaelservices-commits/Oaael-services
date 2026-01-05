import './globals.css'
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import StructuredData from '@/components/StructuredData'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://insulation-riyadh.com'),
  title: {
    default: "شركة عزل فوم بالرياض و الخرج | عزل فوم - عزل حراري - عزل مائي | خبرة 15 سنة ✅",
    template: '%s | شركة عزل فوم بالرياض و الخرج - خبرة 15 سنة'
  },
  description: "شركة عزل فوم بالرياض والخرج ✅ خبرة 15 سنة في عزل الفوم والعزل الحراري والمائي ✅ ضمان 10 سنوات ✅ أسعار تنافسية ✅ فريق محترف ✅ كشف تسربات المياه ✅ عزل خزانات. نخدم جميع أحياء الرياض: الملقا، الياسمين، النرجس، العليا، الروضة. اتصل الآن: 0551777962",
  keywords: [
    // Primary Keywords - الكلمات الرئيسية
    "عزل فوم بالرياض", "عزل فوم بالخرج", "شركة عزل بالرياض",
    "عزل حراري بالرياض", "عزل مائي بالرياض", "أفضل شركة عزل بالرياض",

    // Service-specific Keywords - كلمات الخدمات
    "عزل فوم", "عزل أسطح", "عزل الأسطح من الحرارة", "عزل الأسطح من الرطوبة",
    "عزل خزانات بالرياض", "عزل خزانات المياه", "كشف تسربات المياه بالرياض",
    "عزل مسابح بالرياض", "عزل حمامات بالرياض", "عزل الشينكو",

    // Long-tail Keywords - كلمات طويلة
    "أفضل شركة عزل فوم بالرياض", "شركة عزل أسطح بالرياض بالضمان",
    "عزل الأسطح من الحرارة والرطوبة", "عزل فوم رغوي بالرياض",
    "شركة عزل أسطح معتمدة بالرياض", "عزل الفوم الحراري للأسطح",
    "عزل مائي للأسطح بالرياض", "عزل الأسطح البيتومين بالرياض",

    // Neighborhood Keywords - كلمات الأحياء
    "عزل أسطح الملقا", "عزل أسطح الياسمين", "عزل أسطح النرجس",
    "عزل أسطح الربيع", "عزل أسطح الورود", "عزل أسطح العليا",
    "عزل أسطح السليمانية", "عزل أسطح النخيل", "عزل أسطح الروضة",
    "عزل أسطح حي الصحافة", "عزل أسطح حي العقيق", "عزل أسطح الخرج",

    // Price Keywords - كلمات الأسعار
    "اسعار عزل الفوم بالرياض", "سعر متر عزل الفوم", "تكلفة عزل السطح بالفوم",
    "عروض عزل الأسطح بالرياض", "ارخص شركة عزل بالرياض",

    // Quality Keywords - كلمات الجودة
    "عزل أسطح بالضمان", "عزل فوم بضمان 10 سنوات", "أفضل مواد العزل بالرياض",
    "عزل أسطح احترافي", "شركة عزل موثوقة بالرياض",

    // Problem-solving Keywords - كلمات حل المشاكل
    "علاج تسربات الأسطح", "حل مشكلة حرارة السطح", "منع تسرب المياه للسقف",
    "توفير فاتورة الكهرباء بالعزل", "حماية السطح من الشمس",

    // Commercial Keywords - كلمات تجارية
    "عزل أسطح المصانع", "عزل أسطح المستودعات", "عزل أسطح المباني التجارية",
    "عزل أسطح الفلل", "عزل أسطح القصور", "عزل أسطح الشقق"
  ],
  authors: [{ name: 'شركة عزل أسطح بالرياض' }],
  creator: 'شركة عزل أسطح بالرياض',
  publisher: 'شركة عزل أسطح بالرياض',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://insulation-riyadh.com',
    title: 'شركة عزل أسطح بالرياض | عزل فوم - عزل حراري - عزل مائي | خبرة 15 سنة',
    description: 'شركة عزل أسطح بالرياض والخرج ✅ خبرة 15 سنة في عزل الفوم والعزل الحراري والمائي ✅ ضمان 10 سنوات ✅ أسعار تنافسية ✅ فريق محترف. نخدم جميع أحياء الرياض. اتصل الآن!',
    siteName: 'شركة عزل أسطح بالرياض',
    images: [{
      url: '/insulation-hero.avif',
      width: 1200,
      height: 630,
      alt: 'شركة عزل أسطح بالرياض - عزل فوم وحراري ومائي',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة عزل أسطح بالرياض | عزل فوم - عزل حراري - عزل مائي | خبرة 15 سنة',
    description: 'شركة عزل أسطح بالرياض والخرج ✅ خبرة 15 سنة ✅ ضمان 10 سنوات ✅ عزل فوم وحراري ومائي ✅ كشف تسربات. اتصل: 0551777962',
    images: ['/insulation-hero.avif'],
  },
}

import FloatingButtons from '@/components/FloatingButtons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color for Mobile Browsers - Orange accent for insulation brand */}
        <meta name="theme-color" content="#F97316" />

        {/* Additional SEO Tags */}
        <meta name="application-name" content="شركة عزل أسطح بالرياض" />
        <meta name="msapplication-TileColor" content="#1E3A5F" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="Riyadh" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
      </head>
      <body className={cairo.className}>
        {children}
        <FloatingButtons />
        <StructuredData type="website" />
      </body>
    </html>
  )
}