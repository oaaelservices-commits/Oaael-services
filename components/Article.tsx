import Link from 'next/link'
import { CheckCircle, Shield, Thermometer, Droplets, ArrowLeft } from 'lucide-react'

const Article = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="text-brand-orange-500 font-semibold text-lg">لماذا العزل مهم؟</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              حماية منزلك من الحرارة والرطوبة في الرياض
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              تعتبر الرياض من أشد المدن حرارة في المملكة، حيث تصل درجات الحرارة صيفاً إلى أكثر من 50 درجة مئوية. العزل الجيد للأسطح يحمي منزلك من الحرارة الشديدة ويوفر حتى 50% من فاتورة الكهرباء.
            </p>

            <div className="space-y-4">
              {[
                { icon: Thermometer, title: 'توفير الطاقة', desc: 'خفض فاتورة الكهرباء بنسبة 40-50%' },
                { icon: Droplets, title: 'حماية من الرطوبة', desc: 'منع تسرب المياه وتلف الأسقف' },
                { icon: Shield, title: 'إطالة عمر المبنى', desc: 'حماية هيكل المبنى من التلف' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-brand-orange-50 p-3 rounded-xl">
                    <item.icon className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-navy-600 transition-colors"
            >
              تعرف على خدماتنا
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy-500 p-6 rounded-2xl text-white">
              <div className="text-4xl font-bold text-brand-orange-300 mb-2">50%</div>
              <h3 className="font-bold text-lg mb-2">توفير الكهرباء</h3>
              <p className="text-gray-300 text-sm">العزل الحراري يخفض استهلاك التكييف بشكل كبير</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-4xl font-bold text-navy-500 mb-2">10°C</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">خفض الحرارة</h3>
              <p className="text-gray-600 text-sm">الفوم يخفض درجة حرارة السطح بشكل ملموس</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="text-4xl font-bold text-navy-500 mb-2">15+</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">سنة عمر افتراضي</h3>
              <p className="text-gray-600 text-sm">مواد العزل تدوم لسنوات طويلة</p>
            </div>

            <div className="bg-brand-orange-500 p-6 rounded-2xl text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <h3 className="font-bold text-lg mb-2">حماية مائية</h3>
              <p className="text-orange-100 text-sm">منع تسرب المياه نهائياً</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Article
