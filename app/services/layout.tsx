import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | شركة عزل أسطح بالرياض | 0551777962',
    default: 'خدمات العزل بالرياض | 0551777962',
  },
  description: 'خدمات عزل احترافية بالرياض: عزل فوم، عزل حراري، عزل مائي، عزل خزانات، كشف تسربات. ضمان 10 سنوات وأسعار تنافسية.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
}
