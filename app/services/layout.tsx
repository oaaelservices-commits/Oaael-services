import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | شركة عزل أسطح بالرياض',
    default: 'خدمات العزل بالرياض',
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
