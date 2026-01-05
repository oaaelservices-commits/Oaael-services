import Link from 'next/link'
import { Phone, Shield, Droplets, Thermometer, Home, CheckCircle, Star, Clock, Award } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-screen items-center py-20">

          {/* Main Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 w-fit">
              <Star className="w-5 h-5 text-brand-orange-400" />
              <span className="text-white">أفضل شركة عزل أسطح بالرياض</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
              <span className="block">عزل أسطح بالرياض</span>
              <span className="block mt-2 bg-gradient-to-r from-brand-orange-300 via-brand-orange-400 to-brand-orange-500 bg-clip-text text-transparent">
                حماية شاملة من الحرارة والرطوبة
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-200 max-w-2xl">
              شركة متخصصة في عزل الفوم والعزل الحراري والمائي. نقدم حلول عزل متكاملة للمباني والأسطح مع ضمان يصل إلى 10 سنوات.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-8">
              <div className="text-center p-4 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-white">+2000</div>
                <div className="text-brand-orange-300 text-sm">مشروع ناجح</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-white">15</div>
                <div className="text-brand-orange-300 text-sm">سنة خبرة</div>
              </div>
              <div className="text-center p-4 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-white">10</div>
                <div className="text-brand-orange-300 text-sm">سنوات ضمان</div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, title: 'عزل فوم', desc: 'عزل رغوي متطور' },
                { icon: Thermometer, title: 'عزل حراري', desc: 'توفير الطاقة' },
                { icon: Droplets, title: 'عزل مائي', desc: 'حماية من التسرب' },
                { icon: Home, title: 'عزل أسطح', desc: 'حماية شاملة' },
                { icon: CheckCircle, title: 'ضمان 10 سنوات', desc: 'جودة مضمونة' },
                { icon: Award, title: 'فريق محترف', desc: 'خبرة عالية' },
              ].map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/10 group">
                  <service.icon className="w-8 h-8 text-brand-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:0551777962"
                className="group bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-brand-orange-500/30"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن: 0551777962
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all border border-white/20"
              >
                تصفح خدماتنا
                <span className="rtl:rotate-180">←</span>
              </Link>
            </div>
          </div>

          {/* Image Section - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/roof12.webp"
                alt="عزل أسطح بالرياض - عزل فوم وحراري ومائي"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-brand-orange-500 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">خدمة سريعة</h3>
                  <p className="text-gray-300 text-sm">معاينة مجانية خلال 24 ساعة</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="absolute top-8 right-8 bg-brand-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ✓ شركة معتمدة
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
