import { Truck, Home, Building, Box, Clock, ShieldCheck } from 'lucide-react'

const services = [
  {
    name: 'نقل اثاث في جدة',
    description: 'خدمة نقل عفش منزلي احترافية داخل جدة مع الفك والتركيب والضمان',
    icon: Home,
  },
  {
    name: 'فك وتركيب الاثاث',
    description: 'فنيون متخصصون في فك وتركيب جميع أنواع الأثاث والمطابخ وغرف النوم',
    icon: Building,
  },
  {
    name: 'تغليف الاثاث',
    description: 'تغليف محكم للأثاث والمقتنيات الثمينة باستخدام أفضل مواد التغليف',
    icon: Box,
  },
  {
    name: 'خدمة سريعة',
    description: 'نقل فوري للأثاث داخل أحياء جدة مع طاقم عمل محترف',
    icon: Clock,
  },
  {
    name: 'نقل اثاث بين الاحياء',
    description: 'خدمة نقل عفش آمنة بين جميع أحياء جدة بأسعار تنافسية',
    icon: Truck,
  },
  {
    name: 'ضمان سلامة المنقولات',
    description: 'نضمن سلامة جميع المنقولات مع تأمين شامل ضد الأضرار',
    icon: ShieldCheck,
  },
]

const ServiceCards = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            شركة نقل عفش في جدة
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم خدمات نقل الأثاث المنزلي والمكتبي في جميع أحياء جدة بأيدي محترفة وأسعار مناسبة
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-lg">
                  <service.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCards

