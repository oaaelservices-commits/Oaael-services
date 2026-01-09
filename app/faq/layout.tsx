import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'الاسئله الشائعه | شركة اوائل العزل',
    description: 'إجابات شاملة على أكثر الأسئلة شيوعاً حول خدمات عزل الفوم والأسطح في الرياض.',
    keywords: ['شركة عزل فوم بالرياض', 'عزل اسطح بالرياض', 'عزل مائي وحراري', 'اسئلة شائعة عن العزل', 'اسعار عزل الفوم'],
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
