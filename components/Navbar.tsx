'use client'
import { useState } from 'react'
import { Menu, X, Phone, Shield, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    { name: 'عزل فوم بالرياض', href: '/services/foam-insulation' },
    { name: 'عزل شينكو بالرياض', href: '/services/roof-insulation-shinko' },
    { name: 'عزل فوم بالخرج', href: '/services/kharg-insulation' },
    { name: 'عزل أسطح بالرياض', href: '/services/roof-insulation' },
    { name: 'عزل حراري', href: '/services/thermal-insulation' },
    { name: 'عزل مائي', href: '/services/waterproof-insulation' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-navy-500 p-2 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-navy-600 font-bold text-lg block leading-tight">شركة عزل أسطح</span>
                <span className="text-brand-orange-500 text-sm font-medium">بالرياض والخرج</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-700 hover:text-navy-500 transition-colors px-3 py-2 text-sm font-medium">الرئيسية</Link>

                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    className="flex items-center gap-1 text-gray-700 hover:text-navy-500 transition-colors px-3 py-2 text-sm font-medium"
                  >
                    خدماتنا
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div
                      className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy-500 font-medium border-b border-gray-100"
                        onClick={() => setServicesOpen(false)}
                      >
                        جميع الخدمات
                      </Link>
                      {services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-navy-500 text-sm"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/about" className="text-gray-700 hover:text-navy-500 transition-colors px-3 py-2 text-sm font-medium">من نحن</Link>
                <Link href="/blog" className="text-gray-700 hover:text-navy-500 transition-colors px-3 py-2 text-sm font-medium">المدونة</Link>
                <Link href="/faq" className="text-gray-700 hover:text-navy-500 transition-colors px-3 py-2 text-sm font-medium">الأسئلة الشائعة</Link>
                <Link
                  href="tel:0551777962"
                  className="flex items-center gap-2 bg-brand-orange-500 text-white hover:bg-brand-orange-600 transition-colors px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-brand-orange-500/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>0551777962</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href="tel:0551777962"
              className="flex items-center gap-1 bg-brand-orange-500 text-white px-3 py-2 rounded-lg text-sm font-bold"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline">اتصل</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-navy-500 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <span className="sr-only">افتح القائمة الرئيسية</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50 border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="block text-gray-700 hover:text-navy-500 hover:bg-gray-50 transition-colors px-4 py-3 text-base font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-navy-500 hover:bg-gray-50 transition-colors px-4 py-3 text-base font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              خدماتنا
            </Link>
            {/* Mobile Services Sub-links */}
            <div className="pr-4 space-y-1">
              {services.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="block text-gray-500 hover:text-navy-500 hover:bg-gray-50 transition-colors px-4 py-2 text-sm rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-navy-500 hover:bg-gray-50 transition-colors px-4 py-3 text-base font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              من نحن
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-navy-500 hover:bg-gray-50 transition-colors px-4 py-3 text-base font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              المدونة
            </Link>
            <Link
              href="/faq"
              className="block text-gray-700 hover:text-navy-500 hover:bg-gray-50 transition-colors px-4 py-3 text-base font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              الأسئلة الشائعة
            </Link>
            <div className="pt-2 px-2">
              <Link
                href="tel:0551777962"
                className="flex items-center justify-center gap-2 bg-brand-orange-500 text-white hover:bg-brand-orange-600 transition-colors px-4 py-3 rounded-xl text-base font-bold"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5" />
                اتصل بنا: 0551777962
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

