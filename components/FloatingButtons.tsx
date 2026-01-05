'use client'

import { Phone, MessageCircle } from 'lucide-react'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a
        href="tel:0551777962"
        className="bg-navy-500 hover:bg-navy-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group"
        aria-label="اتصل بنا"
      >
        <Phone className="w-6 h-6 group-hover:animate-pulse" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/966507067378"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      </a>
    </div>
  )
}

export default FloatingButtons