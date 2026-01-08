import Link from 'next/link'
import { Metadata } from 'next'
import {
  Shield,
  Droplets,
  Thermometer,
  Home,
  Search,
  Container,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowLeft,
  Award,
  Clock,
  MapPin,
  Star
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'خدمات العزل بالرياض | عزل فوم- شينكو - هناجر 0551777962',
  description: 'خدمات عزل احترافية بالرياض: عزل فوم، عزل حراري، عزل مائي، عزل خزانات، كشف تسربات. ضمان 10 سنوات وأسعار تنافسية. اتصل الآن: 0551777962',
}

const services = [
  {
    title: 'عزل فوم بالرياض',
    description: 'عزل الفوم الرغوي (البولي يوريثان) هو الحل الأمثل للعزل الحراري والمائي معاً. يوفر طبقة عازلة متينة تحمي الأسطح من الحرارة الشديدة والرطوبة. نستخدم أجود أنواع الفوم بكثافة عالية تضمن عزلاً فعالاً لسنوات طويلة.',
    longDescription: 'عزل الفوم الرغوي (البولي يوريثان) يعتبر من أحدث وأفضل تقنيات العزل المتاحة حالياً. يتميز بقدرته على توفير عزل حراري ومائي في طبقة واحدة، مما يجعله الخيار الأمثل للأسطح في مناخ الرياض الحار. نستخدم فوم بكثافة 35-40 كجم/م³ لضمان أفضل أداء عازل.',
    icon: Shield,
    color: 'text-brand-orange-500',
    bgColor: 'bg-brand-orange-50',
    slug: 'foam-insulation',
    areas: ['جميع أحياء الرياض', 'الخرج', 'الدرعية', 'المناطق الصناعية'],
    features: ['عزل حراري ومائي معاً', 'مقاومة للحرارة حتى 180°C', 'ضمان 10 سنوات', 'تطبيق سريع', 'عمر افتراضي طويل'],
    price: 'يبدأ من 35 ريال/م²',
    duration: '1-3 أيام'
  },
  {
    title: 'عزل أسطح بالرياض',
    description: 'خدمة عزل الأسطح الشاملة تحمي منزلك من أشعة الشمس الحارقة والأمطار. نستخدم أفضل مواد العزل المعتمدة عالمياً لضمان حماية كاملة لسطح منزلك.',
    longDescription: 'نقدم خدمة عزل أسطح متكاملة تشمل التنظيف والتجهيز، تطبيق طبقات العزل الأساسية، والتشطيب النهائي. نستخدم مواد عزل معتمدة من الجهات الرسمية السعودية ومطابقة للمواصفات العالمية.',
    icon: Home,
    color: 'text-navy-500',
    bgColor: 'bg-navy-50',
    slug: 'roof-insulation',
    areas: ['الملقا', 'الياسمين', 'النرجس', 'الربيع', 'الورود', 'العليا', 'السليمانية'],
    features: ['حماية شاملة من الشمس والمطر', 'توفير 40% من الكهرباء', 'عمر افتراضي 15 سنة', 'مواد معتمدة', 'فريق محترف'],
    price: 'يبدأ من 25 ريال/م²',
    duration: '2-5 أيام'
  },
  {
    title: 'عزل مائي بالرياض',
    description: 'العزل المائي يمنع تسرب المياه ويحمي المباني من الرطوبة والتلف. نستخدم مواد عزل مائي عالية الجودة مثل البيتومين والرولات العازلة.',
    longDescription: 'نقدم حلول عزل مائي متكاملة للأسطح والحمامات والمطابخ والأساسات. نستخدم مواد عزل مائي عالية الجودة تشمل البيتومين المعدل، رولات SBS، والمواد البوليمرية. جميع المواد مقاومة للأشعة فوق البنفسجية والعوامل الجوية.',
    icon: Droplets,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    slug: 'waterproof-insulation',
    areas: ['الأسطح', 'الحمامات', 'المطابخ', 'الأساسات', 'المسابح'],
    features: ['منع تسرب المياه 100%', 'حماية من الرطوبة', 'مقاومة للعوامل الجوية', 'ضمان 7 سنوات', 'مواد صديقة للبيئة'],
    price: 'يبدأ من 30 ريال/م²',
    duration: '2-4 أيام'
  },
  {
    title: 'عزل حراري بالرياض',
    description: 'العزل الحراري يخفض درجة حرارة المبنى ويوفر استهلاك الكهرباء والتكييف. حل مثالي لمواجهة حرارة الصيف في الرياض.',
    longDescription: 'العزل الحراري ضروري في مناخ الرياض الصحراوي حيث تصل درجات الحرارة صيفاً إلى أكثر من 50 درجة مئوية. نستخدم مواد عزل حراري عالية الكثافة توفر حتى 50% من فاتورة الكهرباء وتطيل عمر أجهزة التكييف.',
    icon: Thermometer,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    slug: 'thermal-insulation',
    areas: ['أسطح المنازل', 'الجدران', 'الأسقف', 'المستودعات', 'المصانع'],
    features: ['توفير 50% من فاتورة الكهرباء', 'تبريد أسرع للمبنى', 'راحة حرارية دائمة', 'حماية من أشعة الشمس', 'عمر طويل'],
    price: 'يبدأ من 20 ريال/م²',
    duration: '1-3 أيام'
  },

  {
    title: 'عزل فوم بالخرج',
    description: 'خدمة عزل فوم بولي يوريثان متكاملة لسكان محافظة الخرج والدلم والمناطق المجاورة. حماية وحفاظ على الطاقة.',
    longDescription: 'نقدم خدمات عزل الفوم المتخصصة في الخرج وما حولها. نغطي جميع احتياجات العزل الحراري والمائي للمباني السكنية والتجارية والمزارع في الخرج، الدلم، الهياثم، ونعجان.',
    icon: Home,
    color: 'text-brand-orange-500',
    bgColor: 'bg-brand-orange-50',
    slug: 'kharg-insulation',
    areas: ['الخرج', 'الدلم', 'الهياثم', 'السلمية', 'نعجان'],
    features: ['عزل فوم بولي يوريثان', 'تغطية شاملة للخرج', 'ضمان 10 سنوات', 'معاينة مجانية', 'سرعة في التنفيذ'],
    price: 'يبدأ من 25 ريال/م²',
    duration: '1-2 يوم'
  },
]

const testimonials = [
  {
    name: 'أحمد السالم',
    location: 'حي الملقا',
    rating: 5,
    text: 'ممتازين جداً! عزلوا سطح الفيلا بالفوم وانخفضت فاتورة الكهرباء بشكل ملحوظ. الشغل نظيف والفريق محترف.',
    service: 'عزل فوم'
  },
  {
    name: 'محمد العتيبي',
    location: 'حي الياسمين',
    rating: 5,
    text: 'تعاملت معهم في مشروع عزل عمارة سكنية. ملتزمين بالمواعيد والجودة عالية. أنصح بهم بشدة.',
    service: 'عزل أسطح'
  },
  {
    name: 'عبدالله الغامدي',
    location: 'الخرج',
    rating: 5,
    text: 'كشفوا تسرب المياه وعالجوه بسرعة. ضمان ممتاز ومتابعة جيدة. شكراً لكم.',
    service: 'كشف تسربات'
  },
]

const faqs = [
  {
    question: 'كم تكلفة عزل السطح بالفوم في الرياض؟',
    answer: 'تختلف التكلفة حسب مساحة السطح. يبدأ سعر المتر المربع من 20 ريال لعزل الفوم الشامل. نقدم معاينة مجانية وعرض سعر تفصيلي.'
  },
  {
    question: 'ما مدة الضمان على أعمال العزل؟',
    answer: 'نقدم ضمان 10 سنوات على عزل الفوم، 7 سنوات على العزل المائي، و5 سنوات على عزل الخزانات. الضمان يشمل الصيانة والإصلاح المجاني.'
  },
  {
    question: 'هل تعملون في جميع أحياء الرياض؟',
    answer: 'نعم، نغطي جميع أحياء الرياض والخرج والدرعية. فريقنا جاهز للوصول إليك خلال 24 ساعة.'
  },
  {
    question: 'كم يستغرق عزل سطح المنزل؟',
    answer: 'يعتمد على المساحة: سطح 100م² يستغرق يوم واحد، 200-300م² يستغرق يومين. نستخدم معدات حديثة لإنجاز العمل بسرعة.'
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange-500 text-white text-sm px-4 py-2 rounded-full font-medium mb-6">
            خدماتنا المتميزة
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            خدمات عزل الأسطح بالرياض
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
            نقدم خدمات عزل احترافية ومتكاملة في جميع أحياء الرياض والخرج مع ضمان يصل إلى 10 سنوات
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0551777962"
              className="bg-brand-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-orange-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              اتصل الآن: 0551777962
            </a>
            <a
              href="https://wa.me/966507067378"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange-500 font-semibold text-lg">لماذا نحن؟</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              لماذا تختار شركة عزل أسطح بالرياض؟
            </h2>
            <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-brand-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">خبرة 15 سنة</h3>
              <p className="text-gray-600">خبرة واسعة في مجال العزل مع آلاف المشاريع الناجحة</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ضمان 10 سنوات</h3>
              <p className="text-gray-600">ضمان شامل على جميع أعمال العزل مع صيانة مجانية</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">معاينة مجانية</h3>
              <p className="text-gray-600">نصل إليك خلال 24 ساعة لمعاينة المشروع</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">تغطية شاملة</h3>
              <p className="text-gray-600">نخدم جميع أحياء الرياض والخرج والمناطق المجاورة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange-500 font-semibold text-lg">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              خدمات العزل المتميزة
            </h2>
            <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-navy-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">المميزات:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">المناطق:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.slice(0, 4).map((area, idx) => (
                        <span
                          key={idx}
                          className="bg-navy-50 text-navy-600 text-sm px-3 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">السعر:</span>
                      <span className="font-bold text-brand-orange-500">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span className="text-gray-600">المدة:</span>
                      <span className="font-semibold text-gray-800">{service.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="tel:0551777962"
                      className="flex-1 flex items-center justify-center gap-2 bg-brand-orange-500 text-white py-3 rounded-xl font-bold hover:bg-brand-orange-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      اتصل
                    </a>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-navy-500 text-white py-3 rounded-xl font-bold hover:bg-navy-600 transition-colors"
                    >
                      التفاصيل
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange-500 font-semibold text-lg">آراء العملاء</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              ماذا يقول عملاؤنا؟
            </h2>
            <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <span className="bg-navy-50 text-navy-600 text-sm px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange-500 font-semibold text-lg">الأسئلة الشائعة</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              أسئلة متكررة
            </h2>
            <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-navy-600 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            احصل على معاينة مجانية الآن
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200">
            تواصل معنا للحصول على معاينة مجانية وعرض سعر مخصص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0551777962"
              className="bg-brand-orange-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-orange-600 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              اتصل: 0551777962
            </a>
            <a
              href="https://wa.me/966507067378"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
