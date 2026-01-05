'use client'

import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-orange-500 font-semibold text-lg">تواصل معنا</span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-2">
            احصل على استشارة مجانية لعزل منزلك
          </h2>
          <div className="w-24 h-1 bg-brand-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            فريقنا جاهز لمساعدتك في اختيار أفضل حلول العزل لمنزلك أو منشأتك. معاينة مجانية وعرض سعر بدون التزام.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* اتصل بنا */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center justify-center w-16 h-16 bg-navy-50 rounded-2xl mb-6 mx-auto group-hover:bg-navy-500 transition-colors">
              <Phone className="h-8 w-8 text-navy-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">اتصل بنا مباشرة</h3>
            <div className="text-center">
              <a
                href="tel:0551777962"
                className="text-2xl font-bold text-brand-orange-500 hover:text-brand-orange-600 block mb-2 transition-colors"
                dir="ltr"
              >
                0551777962
              </a>

            </div>
          </div>

          {/* واتساب */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6 mx-auto group-hover:bg-green-500 transition-colors">
              <MessageCircle className="h-8 w-8 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">تواصل واتساب</h3>
            <div className="text-center">
              <a
                href="https://wa.me/966507067378"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-green-500 hover:bg-green-600 transition-colors"
              >
                <Send className="w-5 h-5" />
                أرسل رسالة
              </a>
            </div>
          </div>

          {/* المنطقة */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center justify-center w-16 h-16 bg-brand-orange-50 rounded-2xl mb-6 mx-auto group-hover:bg-brand-orange-500 transition-colors">
              <MapPin className="h-8 w-8 text-brand-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">نغطي الرياض والخرج</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              الملقا، الياسمين، النرجس، الربيع، الورود، العليا، السليمانية، النخيل، الخرج
            </p>
          </div>

          {/* ساعات العمل */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-50 rounded-2xl mb-6 mx-auto group-hover:bg-purple-500 transition-colors">
              <Clock className="h-8 w-8 text-purple-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">ساعات العمل</h3>
            <p className="text-gray-600 text-center">
              السبت - الخميس<br />
              8:00 ص - 10:00 م
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-navy-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            احصل على عرض سعر مجاني الآن!
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            معاينة مجانية لموقعك وتقييم شامل لاحتياجات العزل. عرض سعر تفصيلي بدون أي التزام.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0551777962"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              اتصل الآن: 0551777962
            </a>
            <a
              href="https://wa.me/966507067378"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-navy-500">10</div>
            <div className="text-gray-600 text-sm">سنوات ضمان</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-navy-500">+2000</div>
            <div className="text-gray-600 text-sm">مشروع ناجح</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-navy-500">100%</div>
            <div className="text-gray-600 text-sm">رضا العملاء</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-navy-500">24</div>
            <div className="text-gray-600 text-sm">ساعة للمعاينة</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
