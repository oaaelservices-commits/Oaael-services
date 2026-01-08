import Link from 'next/link'
import { Building2, Home, Warehouse, Factory, CheckCircle } from 'lucide-react'

const services = [
    {
        title: 'المباني',
        subtitle: 'المقر الرئيسي ومركز العمليات',
        icon: Building2,
        href: '/services/foam-insulation',
        available: true,
        availability: 'متاح 24/7'
    },
    {
        title: 'الخزن',
        subtitle: 'خدمة عزل فوم بيوريثان',
        icon: Warehouse,
        href: '/services/tank-insulation',
        available: true,
        availability: 'متاح'
    },
    {
        title: 'المجمعة',
        subtitle: 'عزل دراري وماني',
        icon: Home,
        href: '/services/thermal-insulation',
        available: true,
        availability: 'متاح'
    },
    {
        title: 'الدوادمي',
        subtitle: 'عزل أسطح احترافي',
        icon: Building2,
        href: '/services/roof-insulation',
        available: true,
        availability: 'متاح'
    },
    {
        title: 'القويعية',
        subtitle: 'عزل فوم بولي يوريثان',
        icon: Home,
        href: '/services/waterproof-insulation',
        available: true,
        availability: 'متاح'
    },
    {
        title: 'وادي الدواسر',
        subtitle: 'عزل أسطح وخزانات',
        icon: Factory,
        href: '/services/roof-insulation-shinko',
        available: true,
        availability: 'متاح'
    },
    {
        title: 'الزلفي',
        subtitle: 'عزل فوم ومتخصص',
        icon: Warehouse,
        href: '/services/foam-insulation',
        available: true,
        availability: 'متاح'
    }
]

export default function ServicesGrid() {
    return (
        <section className="relative py-20 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-brand-orange-500/20 text-brand-orange-300 text-sm px-4 py-2 rounded-full font-medium mb-4 backdrop-blur-sm border border-brand-orange-500/30">
                        خدماتنا المتميزة
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        نخدم جميع مناطق الرياض
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        خدمات عزل احترافية متاحة في جميع المناطق مع فريق متخصص وضمان شامل
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-brand-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange-500/20"
                            >
                                {/* Icon Container */}
                                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors shadow-lg">
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                {/* Service Title */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-orange-300 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Service Subtitle */}
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {service.subtitle}
                                </p>

                                {/* Availability Badge */}
                                {service.available && (
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                                        <CheckCircle className="w-4 h-4 fill-current" />
                                        <span>{service.availability}</span>
                                    </div>
                                )}

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange-500/0 to-brand-orange-500/0 group-hover:from-brand-orange-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                            </Link>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-300 mb-6">
                        هل تحتاج لخدمة عزل في منطقتك؟
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:0551777962"
                            className="inline-flex items-center justify-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            📞 اتصل: 0551777962
                        </a>
                        <a
                            href="https://wa.me/966507067378"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            💬 واتساب
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
