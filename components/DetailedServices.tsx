'use client'

import Link from 'next/link'
import { Shield, Droplets, Thermometer, Home, Search, Container, ArrowLeft } from 'lucide-react'

const services = [
  {
    title: 'عزل فوم بالرياض',
    description: 'عزل الفوم الرغوي (البولي يوريثان) هو الحل الأمثل للعزل الحراري والمائي معاً. يوفر طبقة عازلة متينة تحمي الأسطح من الحرارة الشديدة والرطوبة.',
    icon: Shield,
    color: 'text-brand-orange-500',
    bgColor: 'bg-brand-orange-50',
    slug: 'foam-insulation',
    features: ['عزل حراري ومائي معاً', 'مقاومة للحرارة حتى 180°C', 'ضمان 10 سنوات']
  },
  {
    title: 'عزل أسطح بالرياض',
    description: 'خدمة عزل الأسطح الشاملة تحمي منزلك من أشعة الشمس الحارقة والأمطار. نستخدم أفضل مواد العزل المعتمدة عالمياً.',
    icon: Home,
    color: 'text-navy-500',
    bgColor: 'bg-navy-50',
    slug: 'roof-insulation',
    features: ['حماية من الشمس والمطر', 'توفير 40% من الكهرباء', 'عمر افتراضي 15 سنة']
  },
  {
    title: 'عزل مائي بالرياض',
    description: 'العزل المائي يمنع تسرب المياه ويحمي المباني من الرطوبة والتلف. نستخدم مواد عزل مائي عالية الجودة مثل البيتومين والرولات.',
    icon: Droplets,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    slug: 'waterproof-insulation',
    features: ['منع تسرب المياه 100%', 'حماية من الرطوبة', 'مقاومة للعوامل الجوية']
  },
  {
    title: 'عزل حراري بالرياض',
    description: 'العزل الحراري يخفض درجة حرارة المبنى ويوفر استهلاك الكهرباء والتكييف. حل مثالي لمواجهة حرارة الصيف في الرياض.',
    icon: Thermometer,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    slug: 'thermal-insulation',
    features: ['توفير 50% من فاتورة الكهرباء', 'تبريد أسرع للمبنى', 'راحة حرارية دائمة']
  },
  // {
  //   title: 'كشف تسربات المياه',
  //   description: 'خدمة كشف تسربات المياه بأحدث الأجهزة الإلكترونية دون تكسير. نحدد مكان التسرب بدقة عالية ونقدم حلول فورية.',
  //   icon: Search,
  //   color: 'text-green-500',
  //   bgColor: 'bg-green-50',
  //   slug: 'roof-insulation',
  //   features: ['كشف بدون تكسير', 'أجهزة إلكترونية متطورة', 'تقرير فني مفصل']
  // },
  {
    title: 'عزل فوم بالخرج',
    description: 'خدمة عزل فوم بولي يوريثان متكاملة لسكان محافظة الخرج والدلم والمناطق المجاورة. حماية وحفاظ على الطاقة.',
    icon: Home,
    color: 'text-brand-orange-500',
    bgColor: 'bg-brand-orange-50',
    slug: 'kharg-insulation',
    features: ['عزل فوم بولي يوريثان', 'تغطية شاملة للخرج', 'ضمان 10 سنوات']
  },
]

const DetailedServices = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange-500 font-semibold text-lg">خدماتنا المتميزة</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">
            خدمات عزل الأسطح بالرياض
          </h2>
          <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600">
            نقدم حلول عزل متكاملة للمباني والمنشآت في الرياض والخرج مع ضمان يصل إلى 10 سنوات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-navy-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-brand-orange-500 rounded-full ml-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href="tel:0551777962"
                    className="flex items-center gap-2 bg-brand-orange-500 text-white px-4 py-2 rounded-lg hover:bg-brand-orange-600 transition-colors font-semibold"
                  >
                    <span>📞</span>
                    <span>اتصل الآن</span>
                  </a>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-navy-500 font-semibold group-hover:text-navy-600 transition-colors flex items-center gap-2"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy-500 text-white px-8 py-4 rounded-xl hover:bg-navy-600 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
          >
            عرض جميع الخدمات
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DetailedServices
