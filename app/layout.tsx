import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import StructuredData from '@/components/StructuredData'

const yearOfHandicrafts = localFont({
  src: './fonts/TheYearofHandicrafts-Regular.otf',
  display: 'swap',
  variable: '--font-year-of-handicrafts',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elazzl.sa/'),
  title: {
    default: "شركة عزل فوم بالرياض | 0551777962 | ضمان 15 سنة| شركة اوائل العزل",
    template: '%s | شركة عزل فوم بالرياض | 0551777962'
  },
  description: "الشركة الأولى في عزل الفوم بالرياض 🏆. ضمان حقيقي 15 سنة على العزل المائي والحراري. نستخدم أحدث تقنيات البولي يوريثان لتقليل فاتورة الكهرباء 50%. معتمدون ومرخصون. كشف تسربات وعزل أسطح باحترافية. اتصل الآن واحصل على معاينة مجانية: 0551777962 📞",
  keywords: [
    // Core Keywords - الكلمات الجوهرية
    "شركة عزل فوم بالرياض", "عزل فوم بالرياض", "افضل شركة عزل فوم بالرياض",
    "عزل اسطح بالرياض", "عزل مائي وحراري بالرياض", "عزل فوم بولي يوريثان",

    // Exact Search Terms - جمل بحث دقيقة
    "سعر متر عزل الفوم بالرياض", "ارخص شركة عزل فوم بالرياض",
    "رقم شركة عزل فوم بالرياض", "شركات عزل الفوم المعتمدة",

    // Service Specific - خدمات محددة
    "عزل شينكو بالفوم", "عزل هناجر ومستودعات", "عزل فوم كونكريت",
    "عزل اسطح مبلطة", "عزل خزانات المياه بالرياض", "عزل مسابح",

    // Location Specific - استهداف الأحياء
    "عزل فوم بشمال الرياض", "عزل فوم بشرق الرياض", "عزل فوم بالخرج",
    "شركة عزل فوم بحي الملقا", "شركة عزل فوم بحي الياسمين", "شركة عزل فوم بحي النرجس",

    // Long Tail - كلمات ذيلية
    "حل مشكلة تسربات الاسطح بالرياض", "عزل حراري للاسطح فوق البلاط",
    "فوم عزل اسطح امريكي", "شركة عزل اسطح بالضمان",

    // Trust & Quality - كلمات الثقة
    "عزل فوم مع الضمان", "شركة عزل فوم مجربة", "مؤسسة عزل رسمية"
  ],
  authors: [{ name: 'شركة الأوائل للعزل - الرياض' }],
  creator: 'شركة الأوائل للعزل',
  publisher: 'شركة الأوائل للعزل',
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
    url: 'https://elazzl.sa/',
    title: 'أفضل شركة عزل فوم بالرياض | ضمان 15 سنة | توفير 50% كهرباء',
    description: 'هل تبحث عن أفضل عزل لسطح منزلك؟ نقدم لك عزل فوم بولي يوريثان بأعلى سماكة وضمان 15 سنة. وداعاً لحرارة الصيف وتسربات الشتاء. الحل النهائي بين يديك. اتصل بنا 0551777962',
    siteName: 'شركة عزل فوم بالرياض - الأوائل',
    images: [{
      url: '/insulation-hero.avif',
      width: 1200,
      height: 630,
      alt: 'فني يقوم برش عزل الفوم على سطح فيلا بالرياض',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أقوى عزل فوم بالرياض | ضمان 15 سنة | خصم خاص لفترة محدودة',
    description: 'احمِ منزلك من الحرارة والمطر مع أفضل شركة عزل فوم بالرياض. تنفيذ احترافي، مواد ألمانية، ضمان شامل. اطلب عرض السعر الآن!',
    images: ['/insulation-hero.avif'],
  },
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
  category: "Construction",
  other: {
    "geo.region": "SA-01",
    "geo.placename": "Riyadh",
    "geo.position": "24.7136;46.6753",
    "ICBM": "24.7136, 46.6753"
  }
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
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
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
        <meta name="google-site-verification" content="n3pMZv6StzLd54gLqSvJo0ojtA2qQfKSz_3ASVPWyuA" />
      </head>
      <body className={yearOfHandicrafts.className}>
        {children}
        <FloatingButtons />
        <StructuredData type="website" />
      </body>
    </html>
  )
}