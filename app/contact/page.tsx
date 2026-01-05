import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock, Mail, ExternalLink, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'اتصل بنا | شركة عزل اسطح بالرياض والخرج',
    description: 'تواصل معنا الآن للحصول على أفضل خدمات عزل الأسطح والفوم. خدمة عملاء 24/7، استجابة سريعة، ومعاينة مجانية. اتصل: 0551777962',
}

export default function ContactPage() {
    const contactMethods = [
        {
            icon: <Phone className="w-8 h-8" />,
            title: 'اتصل بنا مباشرة',
            description: 'متاحون للرد على استفساراتكم',
            action: '0551777962',
            href: 'tel:0551777962',
            color: 'bg-brand-orange-500',
            textColor: 'text-brand-orange-500',
            btnColor: 'bg-brand-orange-500 hover:bg-brand-orange-600'
        },
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: 'راسلنا واتساب',
            description: 'للمحادثات السريعة وإرسال الموقع',
            action: 'محادثة مباشرة',
            href: 'https://wa.me/966507067378',
            color: 'bg-green-500',
            textColor: 'text-green-500',
            btnColor: 'bg-green-500 hover:bg-green-600'
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: 'البريد الإلكتروني',
            description: 'للطلبات الرسمية والمشاريع الكبرى',
       
            href: 'mailto:info@exzo.com',
            color: 'bg-blue-500',
            textColor: 'text-blue-500',
            btnColor: 'bg-blue-500 hover:bg-blue-600'
        }
    ]

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-navy-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange-500 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-brand-orange-400 font-bold tracking-wider uppercase mb-4 block">نحن هنا لخدمتك</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        تواصل معنا
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        فريقنا جاهز للرد على جميع استفساراتك وتقديم الاستشارات المجانية. لا تتردد في الاتصال بنا في أي وقت.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-20 bg-gray-50 relative -mt-16 z-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {contactMethods.map((method, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-center group">
                                <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg ${method.color} transition-transform group-hover:scale-110`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                                <p className="text-gray-500 mb-8">{method.description}</p>
                                <a
                                    href={method.href}
                                    className={`inline-flex items-center justify-center gap-2 text-white px-8 py-3 rounded-xl font-bold transition-colors w-full ${method.btnColor}`}
                                >
                                    {method.action}
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info & Map Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                        {/* Information */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">معلومات التواصل والعمل</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    نغطي جميع أحياء الرياض والمناطق المجاورة (الخرج، الدرعية، المزاحمية). يمكننا الوصول إليك أينما كنت لتقديم خدمات العزل بأعلى جودة.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0 text-navy-600">
                                        <Clock className="w-6 h-6" />
                                    </div>
                           
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center flex-shrink-0 text-navy-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                          
                                </div>
                            </div>
                        </div>

               
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
