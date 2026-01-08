'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Shield, Lock, FileText, Eye, Mail, Phone, Server, UserCheck } from 'lucide-react'

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                            <Shield className="w-5 h-5 text-brand-orange-400" />
                            <span className="text-white font-medium">حماية بياناتك أولويتنا</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            سياسة الخصوصية
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            نوضح لك بوضوح كيف نتعامل مع بياناتك ونحمي خصوصيتك
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Introduction */}
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <FileText className="w-8 h-8 text-brand-orange-500" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">مقدمة</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        نحن في شركة عزل فوم بالرياض والخرج نولي أهمية قصوى لخصوصية زوارنا وعملائنا.
                                        تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي قد تقدمها لنا عند استخدام موقعنا الإلكتروني أو خدماتنا.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Information We Collect */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <Eye className="w-8 h-8 text-navy-500" />
                                البيانات التي نجمعها
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <UserCheck className="w-5 h-5 text-brand-orange-500" />
                                        المعلومات الشخصية
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        نجمع المعلومات التي تقدمها طواعية عند التواصل معنا أو طلب خدمة، مثل: الاسم، رقم الهاتف، والبريد الإلكتروني، والعنوان لغرض تقديم الخدمة ومعاينة الموقع.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Server className="w-5 h-5 text-brand-orange-500" />
                                        بيانات الاستخدام
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        قد نجمع بيانات تقنية تلقائية حول كيفية تصفحك للموقع (مثل نوع المتصفح، الصفحات التي زرتها) لتحسين تجربة المستخدم وأداء الموقع.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Information */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <FileText className="w-8 h-8 text-navy-500" />
                                كيف نستخدم بياناتك
                            </h2>
                            <ul className="space-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                {[
                                    "تقديم خدمات العزل والمعاينة التي تطلبها.",
                                    "التواصل معك لتأكيد المواعيد والإجابة على استفساراتك.",
                                    "تحسين وتطوير خدماتنا وموقعنا الإلكتروني بناءً على ملاحظاتك.",
                                    "إرسال عروض خاصة أو تحديثات (فقط إذا وافقت على ذلك)."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-brand-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="block w-2 h-2 bg-brand-orange-500 rounded-full"></span>
                                        </div>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Data Protection */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                <Lock className="w-8 h-8 text-navy-500" />
                                حماية المعلومات ومشاركتها
                            </h2>
                            <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
                                <p className="mb-4">
                                    نحن نلتزم بحماية بياناتك الشخصية ونستخدم إجراءات أمان مناسبة لمنع الوصول غير المصرح به.
                                </p>
                                <p>
                                    <strong className="text-gray-900">نحن لا نبيع ولا نؤجر بياناتك الشخصية لأي طرف ثالث.</strong> قد نشارك معلومات الاتصال الخاصة بك فقط مع فريقنا الفني أو شركاء التنفيذ الموثوقين لغرض وحيد وهو إنجاز الخدمة التي طلبتها (مثل وصول سيارة العزل لموقعك).
                                </p>
                            </div>
                        </div>

                        {/* Updates Policy */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900">التغييرات على سياسة الخصوصية</h2>
                            <p className="text-gray-600 text-lg">
                                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، ونشجعك على مراجعتها بانتظام.
                            </p>
                        </div>

                        {/* Contact Us */}
                        <div className="bg-navy-600 rounded-3xl p-8 md:p-10 text-white text-center">
                            <h2 className="text-2xl font-bold mb-6">لديكم استفسارات؟</h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                إذا كان لديكم أي أسئلة حول سياسة الخصوصية، يسعدنا تواصلكم معنا.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href="tel:0551777962" className="inline-flex items-center justify-center gap-2 bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                                    <Phone className="w-5 h-5" />
                                    0551777962
                                </a>
                                <a href="mailto:info@exzo.com" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                                    <Mail className="w-5 h-5" />
                                    تواصل معنا
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
