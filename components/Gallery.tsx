'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'عزل سطح فيلا بالفوم',
    location: 'حي الملقا، الرياض',
    image: '/images/closed-cell-spray-foam-on-house-garage-walls.webp',
    category: 'عزل فوم'
  },
  {
    id: 2,
    title: 'عزل مائي لسطح عمارة',
    location: 'حي الياسمين، الرياض',
    image: '/images/roof8.webp',
    category: 'عزل مائي'
  },
  {
    id: 3,
    title: 'عزل خزان مياه',
    location: 'حي النرجس، الرياض',
    image: '/images/roof12.webp',
    category: 'عزل خزانات'
  },
  {
    id: 4,
    title: 'عزل حراري لمستودع',
    location: 'المنطقة الصناعية، الرياض',
    image: '/images/attic-with-completed-spray-foam-insulation.webp',
    category: 'عزل حراري'
  },
  {
    id: 5,
    title: 'كشف تسربات مياه',
    location: 'حي العليا، الرياض',
    image: '/images/discovery.webp',
    category: 'كشف تسربات'
  },
  {
    id: 6,
    title: 'عزل سطح مسجد',
    location: 'حي الروضة، الرياض',
    image: '/images/roof2.webp',
    category: 'عزل أسطح'
  },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('الكل')

  const categories = ['الكل', 'عزل فوم', 'عزل مائي', 'عزل حراري', 'عزل خزانات', 'كشف تسربات']

  const filteredItems = activeCategory === 'الكل'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-orange-500 font-semibold text-lg">معرض الأعمال</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            نماذج من مشاريعنا في الرياض
          </h2>
          <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تصفح مجموعة من مشاريع العزل التي أنجزناها في مختلف أحياء الرياض والخرج
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                ? 'bg-navy-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-navy-50 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-navy-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-brand-orange-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.location}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5 text-navy-500" />
                </div>
              </div>

              {/* Info (visible on mobile) */}
              <div className="p-4 md:hidden">
                <span className="inline-block bg-brand-orange-50 text-brand-orange-600 text-xs px-2 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">لديك مشروع عزل؟ تواصل معنا للحصول على معاينة مجانية</p>
          <a
            href="tel:0551777962"
            className="inline-flex items-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-colors shadow-lg"
          >
            📞 اتصل بنا الآن
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
