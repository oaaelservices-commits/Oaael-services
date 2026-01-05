import { Award, Users, Clock, MapPin, Shield, Building, CheckCircle, Target, Eye } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange-50 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-brand-orange-500" />
              <span className="text-navy-600 font-semibold">خبراء عزل الأسطح في الرياض</span>
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                نحمي منزلك من الحرارة والرطوبة منذ أكثر من 15 عاماً
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                شركة عزل أسطح بالرياض هي الخيار الأمثل للحماية الشاملة من الحرارة والرطوبة. نقدم خدمات عزل متكاملة باستخدام أحدث التقنيات وأفضل المواد العالمية، مع فريق من المتخصصين المدربين على أعلى مستوى.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Shield className="w-10 h-10 text-brand-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">ضمان 10 سنوات</h3>
                <p className="text-gray-600">نقدم ضمان شامل على جميع أعمال العزل لراحة بالك</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <Users className="w-10 h-10 text-brand-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">فريق محترف</h3>
                <p className="text-gray-600">فنيين متخصصين مدربين على أحدث تقنيات العزل</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-500">+2000</div>
                <div className="text-gray-600">مشروع ناجح</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-500">15+</div>
                <div className="text-gray-600">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-navy-500">100%</div>
                <div className="text-gray-600">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/insulation-work-1.avif"
                  alt="أعمال عزل الأسطح بالفوم في الرياض"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-navy-500 p-6 rounded-2xl text-white">
                <Clock className="w-8 h-8 mb-3 text-brand-orange-300" />
                <h3 className="text-xl font-bold mb-2">معاينة مجانية</h3>
                <p className="text-gray-200">نصل إليك خلال 24 ساعة لتقييم المشروع</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 p-6 rounded-2xl text-white">
                <CheckCircle className="w-8 h-8 mb-3" />
                <h3 className="text-xl font-bold mb-2">جودة معتمدة</h3>
                <p className="text-orange-100">مواد عزل معتمدة من الجهات الرسمية</p>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/insulation-work-2.avif"
                  alt="عزل خزانات المياه بالرياض"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-navy-500 p-8 rounded-2xl text-white">
            <Eye className="w-12 h-12 mb-4 text-brand-orange-300" />
            <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
            <p className="text-gray-200 leading-relaxed">
              أن نكون الشركة الرائدة في مجال عزل الأسطح والمباني في المملكة العربية السعودية، ونسهم في توفير بيئة آمنة ومريحة لكل منزل ومنشأة.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <Target className="w-12 h-12 mb-4 text-brand-orange-500" />
            <h3 className="text-2xl font-bold mb-4 text-gray-900">رسالتنا</h3>
            <p className="text-gray-600 leading-relaxed">
              تقديم خدمات عزل عالية الجودة بأسعار تنافسية، مع الالتزام بأعلى معايير الأمان والجودة، وتوفير حلول مبتكرة تلبي احتياجات عملائنا.
            </p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">نخدم جميع مناطق الرياض والخرج</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              'حي الملقا',
              'حي الياسمين',
              'حي النرجس',
              'حي الربيع',
              'حي الورود',
              'حي العليا',
              'حي السليمانية',
              'حي النخيل',
              'حي الروضة',
              'الخرج'
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <MapPin className="w-4 h-4 text-brand-orange-500" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
