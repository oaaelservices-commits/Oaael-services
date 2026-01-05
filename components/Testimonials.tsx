import Image from 'next/image'

const testimonials = [
  {
    name: 'أحمد السالم',
    role: 'صاحب فيلا',
    location: 'حي الملقا، الرياض',
    image: '/testimonial-1.avif',
    quote: 'ممتازين جداً! عزلوا سطح الفيلا بالفوم وانخفضت فاتورة الكهرباء بشكل ملحوظ. الشغل نظيف والفريق محترف.',
    rating: 5
  },
  {
    name: 'محمد العتيبي',
    role: 'مقاول',
    location: 'حي الياسمين، الرياض',
    image: '/testimonial-2.avif',
    quote: 'تعاملت معهم في عدة مشاريع عزل للعمارات السكنية. دائماً ملتزمين بالمواعيد والجودة عالية. أنصح بهم بشدة.',
    rating: 5
  },
  {
    name: 'عبدالله الغامدي',
    role: 'صاحب منزل',
    location: 'الخرج',
    image: '/testimonial-3.avif',
    quote: 'كان عندي مشكلة تسربات في السطح، جاءوا وكشفوا المشكلة وعملوا عزل مائي شامل. ضمان 10 سنوات ومتابعة ممتازة.',
    rating: 5
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-orange-500 font-semibold text-lg">آراء العملاء</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            ماذا يقول عملاؤنا؟
          </h2>
          <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            آراء حقيقية من عملائنا الكرام في الرياض والخرج
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-brand-orange-200">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-brand-orange-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-navy-500 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-orange-300">+2000</div>
              <div className="text-gray-300 mt-2">عميل راضي</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-orange-300">100%</div>
              <div className="text-gray-300 mt-2">نسبة الرضا</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-orange-300">15+</div>
              <div className="text-gray-300 mt-2">سنة خبرة</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-brand-orange-300">10</div>
              <div className="text-gray-300 mt-2">سنوات ضمان</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
