'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Phone, Shield, Droplets, Thermometer, Home, CheckCircle, Star,
    ChevronDown, ChevronUp, Lightbulb, ArrowLeft, Quote, MapPin,
    Zap, Users, Award, Clock, Target, TrendingUp, Eye,
    Search, FileText, Layout, ExternalLink, Image as ImageIcon
} from 'lucide-react'

// ============================================
// 1. Narrative Hero Section (قصصي)
// ============================================
export function NarrativeHero() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

            <div className="container mx-auto px-4 relative z-20 py-24 lg:py-32">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                            <Star className="w-5 h-5 text-brand-orange-400 fill-brand-orange-400" />
                            <span className="text-white font-medium">الشركة الرائدة في عزل الأسطح بالرياض منذ 2009</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                            <span className="block">شركة عزل أسطح بالرياض</span>
                            <span className="block mt-3 bg-gradient-to-l from-brand-orange-300 via-brand-orange-400 to-brand-orange-500 bg-clip-text text-transparent">
                                حماية شاملة لمنزلك
                            </span>
                        </h1>

                        {/* Narrative Story */}
                        <div className="space-y-4 text-lg text-gray-200 max-w-2xl leading-relaxed">
                            <p>
                                في صيف الرياض الحار، تصل درجة حرارة الأسطح إلى 70 درجة مئوية. هذه الحرارة تتسلل إلى منزلك،
                                ترفع فاتورة الكهرباء، وتُتلف البنية التحتية. نحن نفهم هذه المعاناة لأننا عشناها مع آلاف العملاء.
                            </p>
                            <p>
                                منذ أكثر من 15 عاماً، نقدم حلول عزل متكاملة تحمي منزلك من الحرارة الشديدة والأمطار الغزيرة.
                                عزل الفوم، العزل المائي، والعزل الحراري - كلها بين يديك مع ضمان يصل إلى 10 سنوات.
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: '+2000', label: 'مشروع ناجح', icon: Target },
                                { value: '15+', label: 'سنة خبرة', icon: Award },
                                { value: '50%', label: 'توفير كهرباء', icon: TrendingUp },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                    <stat.icon className="w-6 h-6 text-brand-orange-400 mx-auto mb-2" />
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-brand-orange-300 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="tel:0551777962"
                                className="group bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-brand-orange-500/30"
                            >
                                <Phone className="w-5 h-5" />
                                اتصل الآن: 0551777962
                            </Link>
                            <Link
                                href="https://wa.me/0551777962"
                                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg"
                            >
                                💬 واتساب مباشر
                            </Link>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/roof12.webp"
                                alt="عزل أسطح بالرياض - عزل فوم حراري ومائي"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 via-transparent to-transparent" />
                        </div>

                  

                 
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100L48 91.7C96 83 192 67 288 58.3C384 50 480 50 576 54.2C672 58 768 67 864 70.8C960 75 1056 75 1152 70.8C1248 67 1344 58 1392 54.2L1440 50V100H0Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}

// ============================================
// 2. Content Pillars Section (محاور المحتوى)
// ============================================
export function ContentPillars() {
    const pillars = [
        {
            icon: Thermometer,
            title: 'عزل الفوم الحراري',
            subtitle: 'الحل الأمثل لصيف الرياض',
            description: `عزل الفوم هو التقنية الأكثر تطوراً في عالم العزل. يتكون من رغوة البولي يوريثان التي تُرش مباشرة على السطح، 
      فتتمدد وتغلق جميع الفراغات والشقوق. يوفر عزلاً حرارياً ومائياً في آن واحد، ويخفض فاتورة الكهرباء بنسبة تصل إلى 50%.
      العمر الافتراضي يتجاوز 20 عاماً مع الصيانة الدورية البسيطة.`,
            features: ['عزل حراري ومائي معاً', 'توفير 50% من الكهرباء', 'عمر افتراضي +20 سنة'],
            link: '/services/foam-insulation',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: Droplets,
            title: 'العزل المائي',
            subtitle: 'حماية من التسربات',
            description: `العزل المائي ضروري لحماية المباني من مياه الأمطار والرطوبة. نستخدم مواد البيتومين والممبرين عالية الجودة 
      المعتمدة من الجهات الرسمية. يمنع تسرب المياه 100% ويحمي الهيكل الإنشائي من التآكل والتلف. 
      مثالي للأسطح والحمامات والمسابح وخزانات المياه.`,
            features: ['منع تسرب 100%', 'مواد بيتومين معتمدة', 'حماية الهيكل الإنشائي'],
            link: '/services/waterproof-insulation',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Home,
            title: 'عزل الأسطح الشامل',
            subtitle: 'حماية متكاملة',
            description: `عزل الأسطح الشامل يجمع بين العزل الحراري والمائي في نظام متكامل. نبدأ بتنظيف السطح وإصلاح الشقوق، 
      ثم نطبق طبقات العزل المتعددة حسب احتياجات المبنى. النتيجة: سطح محمي من الحرارة الشديدة والأمطار الغزيرة 
      مع ضمان يصل إلى 10 سنوات.`,
            features: ['عزل حراري + مائي', 'ضمان 10 سنوات', 'حماية شاملة'],
            link: '/services/roof-insulation',
            color: 'from-navy-500 to-navy-700'
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">خدماتنا الرئيسية</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        ثلاثة محاور أساسية لحماية منزلك
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        نقدم حلول عزل متكاملة تغطي جميع احتياجات المباني السكنية والتجارية في الرياض والمناطق المجاورة
                    </p>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <div
                            key={idx}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <pillar.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <span className="text-brand-orange-500 text-sm font-medium">{pillar.subtitle}</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">{pillar.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {pillar.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Link */}
                            <Link
                                href={pillar.link}
                                className="inline-flex items-center gap-2 text-navy-600 font-semibold group-hover:text-brand-orange-500 transition-colors"
                            >
                                اقرأ المزيد
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 3. Deep Explanation Split Section
// ============================================
export function DeepExplanation() {
    const sections = [
        {
            title: 'لماذا عزل الفوم هو الأفضل في الرياض؟',
            content: `تتميز الرياض بمناخ صحراوي قاسي، حيث تصل درجات الحرارة في الصيف إلى 50 درجة مئوية. 
      هذه الحرارة الشديدة تُحمّل أجهزة التكييف عبئاً كبيراً وترفع فاتورة الكهرباء بشكل ملحوظ.
      
      عزل الفوم (البولي يوريثان) يُشكل حاجزاً حرارياً فعالاً بين السطح والحرارة الخارجية. كثافته العالية 
      (35-40 كجم/م³) تمنع انتقال الحرارة، بينما خاصية الإلتصاق التام تُغلق جميع الفتحات والشقوق.
      
      النتيجة: انخفاض درجة حرارة السطح الداخلي بـ 15-20 درجة، وتوفير يصل إلى 50% في فاتورة الكهرباء.`,
            image: '/images/polyurethane-foam-insulation-application.webp',
            imageAlt: 'تطبيق عزل الفوم على سطح مبنى',
            highlights: [
                { text: 'كثافة عالية 35-40 كجم/م³', icon: Shield },
                { text: 'يُغلق جميع الشقوق', icon: Target },
                { text: 'توفير 50% كهرباء', icon: Zap }
            ],
            reverse: false
        },
        {
            title: 'كيف يحمي العزل المائي منزلك؟',
            content: `الرطوبة والمياه المتسربة هي العدو الخفي للمباني. تسرب المياه يُسبب تآكل حديد التسليح، 
      تشقق الخرسانة، نمو العفن والفطريات، وتلف الطلاء والديكورات الداخلية.
      
      نستخدم في أعمال العزل المائي مواد بيتومينية عالية الجودة (APP/SBS) وأغشية الممبرين 
      المعتمدة دولياً. يتم تطبيق العزل على طبقات متعددة مع اهتمام خاص بمناطق التقاطع والزوايا.
      
      العزل المائي لا يقتصر على الأسطح فقط، بل يشمل الحمامات، المطابخ، المسابح، وخزانات المياه.`,
            image: '/images/best-practices-spray-foam-installation-on-roof.webp',
            imageAlt: 'أعمال العزل المائي',
            highlights: [
                { text: 'مواد APP/SBS معتمدة', icon: Award },
                { text: 'طبقات متعددة', icon: Shield },
                { text: 'حماية الهيكل الإنشائي', icon: Home }
            ],
            reverse: true
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">فهم أعمق</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        كل ما تحتاج معرفته عن العزل
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Sections */}
                <div className="space-y-20">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text */}
                            <div className={section.reverse ? 'lg:order-2' : ''}>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{section.title}</h3>
                                <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line mb-8">
                                    {section.content}
                                </div>

                                {/* Highlights */}
                                <div className="grid grid-cols-3 gap-4">
                                    {section.highlights.map((highlight, i) => (
                                        <div key={i} className="text-center p-4 bg-white rounded-xl shadow-sm">
                                            <highlight.icon className="w-6 h-6 text-brand-orange-500 mx-auto mb-2" />
                                            <span className="text-sm text-gray-700 font-medium">{highlight.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`relative ${section.reverse ? 'lg:order-1' : ''}`}>
                                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                                    <Image
                                        src={section.image}
                                        alt={section.imageAlt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Decorative Element */}
                                <div className={`absolute -z-10 w-full h-full bg-brand-orange-100 rounded-3xl top-6 ${section.reverse ? 'right-6' : '-right-6'}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 4. Expandable Knowledge Blocks
// ============================================
export function KnowledgeBlocks() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const blocks = [
        {
            title: 'ما هو عزل الفوم (البولي يوريثان)؟',
            content: `عزل الفوم هو نظام عزل حديث يعتمد على مادة البولي يوريثان التي تُرش على شكل سائل ثم تتمدد وتتصلب لتُشكل طبقة عازلة متماسكة.
      
      يتميز عزل الفوم بقدرته الفائقة على منع انتقال الحرارة بفضل التركيب الخلوي المغلق الذي يحبس الهواء داخله. كما أنه يعمل كعازل مائي في نفس الوقت، مما يجعله الخيار الأمثل للأسطح.
      
      أنواع عزل الفوم:
      • فوم مفتوح الخلايا: أخف وزناً، مثالي للأماكن الداخلية
      • فوم مغلق الخلايا: أعلى كثافة، مثالي للأسطح الخارجية
      
      السماكة الموصى بها: 3-5 سم للأسطح العادية، 5-7 سم للمباني المعرضة لحرارة شديدة.`,
            icon: Thermometer
        },
        {
            title: 'أنواع العزل المائي ومتى نستخدم كل نوع؟',
            content: `العزل المائي له عدة أنواع، كل نوع مناسب لتطبيق معين:
      
      1. العزل البيتوميني (القار):
      - الأكثر شيوعاً للأسطح
      - يُطبق على الساخن أو البارد
      - متانة عالية وسعر مناسب
      
      2. أغشية الممبرين (PVC/EPDM):
      - مقاومة عالية للأشعة فوق البنفسجية
      - عمر افتراضي طويل
      - مثالية للأسطح المكشوفة
      
      3. العزل الإسمنتي:
      - مثالي للحمامات والمطابخ
      - سهل التطبيق
      - يتحمل الرطوبة المستمرة
      
      4. عزل البولي يوريا:
      - أسرع جفافاً
      - مرونة عالية
      - مثالي للمسابح والخزانات`,
            icon: Droplets
        },
        {
            title: 'كيف أختار نوع العزل المناسب لمبناي؟',
            content: `اختيار نوع العزل يعتمد على عدة عوامل:
      
      الموقع الجغرافي:
      - الرياض والمناطق الحارة: عزل الفوم أو العزل الحراري المعزز
      - المناطق الساحلية: تركيز على العزل المائي
      
      نوع المبنى:
      - فلل ومنازل: عزل فوم شامل
      - عمارات سكنية: عزل بيتوميني + حراري
      - مصانع ومستودعات: ألواح ساندويتش بانل
      
      الميزانية:
      - اقتصادي: عزل بيتوميني تقليدي
      - متوسط: عزل فوم بسماكة 3 سم
      - ممتاز: عزل فوم 5 سم + طبقة حماية
      
      نصيحتنا: اطلب معاينة مجانية لتقييم احتياجات المبنى الفعلية.`,
            icon: Target
        },
        {
            title: 'ما هي مدة تنفيذ أعمال العزل؟',
            content: `مدة التنفيذ تختلف حسب نوع العزل ومساحة السطح:
      
      عزل الفوم:
      - حتى 200 م²: يوم واحد
      - 200-500 م²: 1-2 يوم
      - أكثر من 500 م²: 2-4 أيام
      
      العزل المائي البيتوميني:
      - حتى 200 م²: 1-2 يوم
      - 200-500 م²: 2-3 أيام
      - أكثر من 500 م²: 3-5 أيام
      
      العزل الشامل (حراري + مائي):
      - أضف يوم إضافي للتجفيف بين الطبقات
      
      ملاحظة: الظروف الجوية قد تؤثر على جدول التنفيذ. نتجنب العمل في الأمطار أو الرطوبة العالية.`,
            icon: Clock
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">قاعدة المعرفة</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        أسئلة تقنية وإجابات تفصيلية
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        نجيب على أهم الأسئلة التقنية لمساعدتك في اتخاذ القرار الصحيح
                    </p>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Knowledge Blocks */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {blocks.map((block, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-orange-100 rounded-xl flex items-center justify-center">
                                        <block.icon className="w-6 h-6 text-brand-orange-500" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{block.title}</h3>
                                </div>
                                {openIndex === idx ? (
                                    <ChevronUp className="w-6 h-6 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400" />
                                )}
                            </button>

                            {openIndex === idx && (
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                    <div className="prose prose-lg text-gray-600 whitespace-pre-line leading-relaxed">
                                        {block.content}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 5. Problem → Solution Section
// ============================================
export function ProblemSolution() {
    const problems = [
        {
            problem: 'ارتفاع فاتورة الكهرباء في الصيف',
            description: 'فاتورة كهرباء تتجاوز 2000 ريال شهرياً بسبب تشغيل المكيفات على أقصى طاقة',
            solution: 'عزل الفوم الحراري',
            solutionDesc: 'يخفض استهلاك الكهرباء بنسبة 40-50% عن طريق منع دخول الحرارة من السطح',
            icon: Zap
        },
        {
            problem: 'تسرب المياه من السقف',
            description: 'بقع رطوبة وتقشر في الدهانات، روائح عفن، وأصوات قطرات مياه أثناء المطر',
            solution: 'العزل المائي البيتوميني',
            solutionDesc: 'طبقات عزل متعددة تمنع تسرب المياه 100% مع ضمان 10 سنوات',
            icon: Droplets
        },
        {
            problem: 'حرارة شديدة في الطابق العلوي',
            description: 'الغرف العلوية لا تبرد حتى مع تشغيل المكيف، فرق واضح عن الطوابق السفلية',
            solution: 'عزل السطح الشامل',
            solutionDesc: 'عزل حراري ومائي متكامل يحافظ على برودة المبنى ويوزع الحرارة بالتساوي',
            icon: Thermometer
        },
        {
            problem: 'تشققات وتآكل في السطح',
            description: 'ظهور شقوق وتصدعات في الخرسانة نتيجة التمدد والانكماش الحراري',
            solution: 'معالجة وعزل وقائي',
            solutionDesc: 'إصلاح الشقوق بمواد مرنة ثم تطبيق عزل يحمي من التمدد الحراري',
            icon: Shield
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">مشاكل وحلول</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        نحوّل مشاكلك إلى حلول دائمة
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {problems.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Problem */}
                                <div className="bg-red-50 rounded-2xl p-6 border-r-4 border-red-400">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                            <span className="text-red-500 text-xl">✗</span>
                                        </div>
                                        <span className="text-red-600 font-bold text-sm">المشكلة</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.problem}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>

                                {/* Solution */}
                                <div className="bg-green-50 rounded-2xl p-6 border-r-4 border-green-400">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                        </div>
                                        <span className="text-green-600 font-bold text-sm">الحل</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.solution}</h3>
                                    <p className="text-gray-600 text-sm">{item.solutionDesc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 6. Process With Context Section
// ============================================
export function ProcessWithContext() {
    const steps = [
        {
            number: 1,
            title: 'التواصل والاستفسار',
            description: `الخطوة الأولى هي التواصل معنا عبر الهاتف أو الواتساب. فريق خدمة العملاء سيستمع لاحتياجاتك، 
            يسجل معلومات المبنى الأساسية (الموقع، المساحة التقريبية، نوع المبنى)، ويحدد موعداً للمعاينة المجانية.
            نحرص على الرد خلال ساعة واحدة في أوقات العمل.`,
            icon: Phone,
            duration: 'خلال ساعة'
        },
        {
            number: 2,
            title: 'المعاينة الفنية المجانية',
            description: `يزور فريقنا الفني موقعك لإجراء معاينة شاملة. نفحص حالة السطح، نحدد مناطق الضعف والتسربات، 
            نقيس المساحة بدقة، ونحدد نوع العزل الأنسب. المعاينة تشمل فحص العزل القديم إن وجد وتقييم حاجة الإصلاح.`,
            icon: Eye,
            duration: '30-60 دقيقة'
        },
        {
            number: 3,
            title: 'عرض السعر المفصل',
            description: `بناءً على المعاينة، نقدم عرض سعر شفاف ومفصل يشمل: نوع العزل الموصى به، الكمية والسماكة، 
            تكلفة المواد والعمالة، مدة التنفيذ، وتفاصيل الضمان. لا توجد تكاليف مخفية - السعر النهائي هو السعر المتفق عليه.`,
            icon: Target,
            duration: 'خلال 24 ساعة'
        },
        {
            number: 4,
            title: 'التنفيذ الاحترافي',
            description: `بعد الاتفاق، يباشر فريق التنفيذ العمل. نبدأ بتنظيف السطح وإصلاح الشقوق، ثم نطبق طبقات العزل 
            بالتسلسل الصحيح. نستخدم معدات حديثة ونلتزم بمعايير السلامة. العمل يتم بإشراف مهندس متخصص.`,
            icon: Users,
            duration: '1-5 أيام'
        },
        {
            number: 5,
            title: 'التسليم والضمان',
            description: `بعد الانتهاء، نجري فحصاً نهائياً للتأكد من جودة العزل. نسلمك تقريراً مفصلاً عن العمل المنجز 
            مع صور قبل وبعد. تحصل على شهادة ضمان مكتوبة تصل إلى 10 سنوات تشمل الإصلاح المجاني لأي عيوب.`,
            icon: Award,
            duration: 'ضمان 10 سنوات'
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">آلية العمل</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        خمس خطوات نحو سطح معزول بامتياز
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
                            {/* Timeline Line */}
                            {idx < steps.length - 1 && (
                                <div className="absolute top-16 right-6 w-0.5 h-full bg-brand-orange-200" />
                            )}

                            {/* Number */}
                            <div className="relative z-10 w-12 h-12 bg-brand-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1 hover:shadow-xl transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <step.icon className="w-6 h-6 text-brand-orange-500" />
                                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                    </div>
                                    <span className="bg-brand-orange-100 text-brand-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                                        {step.duration}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 7. Use Cases Section
// ============================================
export function UseCases() {
    const cases = [
        {
            title: 'فيلا سكنية - حي الملقا',
            area: '350 م²',
            type: 'عزل فوم حراري',
            problem: 'فاتورة كهرباء مرتفعة جداً في الصيف (2,500 ريال/شهر)',
            solution: 'عزل فوم بسماكة 5 سم على كامل السطح',
            result: 'انخفاض الفاتورة إلى 1,400 ريال (توفير 44%)',
            duration: '3 أيام',
            image: '/images/roof12.webp'
        },
        {
            title: 'عمارة سكنية - حي الياسمين',
            area: '800 م²',
            type: 'عزل مائي + حراري',
            problem: 'تسربات مياه متكررة وشكاوى من السكان',
            solution: 'إصلاح شامل + عزل بيتوميني + فوم',
            result: 'توقف التسربات نهائياً مع ضمان 10 سنوات',
            duration: '6 أيام',
            image: '/images/roof8.webp'
        },
        {
            title: 'مستودع تجاري - الخرج',
            area: '2000 م²',
            type: 'عزل حراري صناعي',
            problem: 'ارتفاع درجة الحرارة داخل المستودع يؤثر على البضائع',
            solution: 'ألواح ساندويتش بانل معزولة',
            result: 'انخفاض الحرارة الداخلية 18 درجة',
            duration: '10 أيام',
            image: '/images/roof10.webp'
        }
    ]

    return (
        <section className="py-20 bg-navy-600">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-300 font-semibold text-lg">من أعمالنا</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
                        مشاريع حقيقية ونتائج ملموسة
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform">
                            {/* Image */}
                            <div className="relative h-48">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-brand-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    {item.type}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">المساحة:</span>
                                        <span className="font-medium text-gray-900">{item.area}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">المدة:</span>
                                        <span className="font-medium text-gray-900">{item.duration}</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="mb-3">
                                        <span className="text-red-500 text-xs font-bold">المشكلة:</span>
                                        <p className="text-gray-600 text-sm mt-1">{item.problem}</p>
                                    </div>
                                    <div className="mb-3">
                                        <span className="text-blue-500 text-xs font-bold">الحل:</span>
                                        <p className="text-gray-600 text-sm mt-1">{item.solution}</p>
                                    </div>
                                    <div className="bg-green-50 rounded-xl p-3">
                                        <span className="text-green-600 text-xs font-bold">النتيجة:</span>
                                        <p className="text-green-700 text-sm mt-1 font-medium">{item.result}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 8. Comparison Content Section
// ============================================
export function ComparisonContent() {
    const types = [
        {
            name: 'عزل الفوم',
            thermal: 'ممتاز',
            waterproof: 'ممتاز',
            lifespan: '20+ سنة',
            recommended: true,
            pros: ['عزل حراري ومائي معاً', 'سريع التطبيق', 'يغلق الشقوق'],
            cons: ['سعر أعلى نسبياً', 'يحتاج فني متخصص']
        },
        {
            name: 'عزل البيتومين',
            thermal: 'ضعيف',
            waterproof: 'ممتاز',
            lifespan: '10-15 سنة',
            recommended: false,
            pros: ['سعر اقتصادي', 'مقاومة عالية للماء', 'متوفر بكثرة'],
            cons: ['عزل حراري ضعيف', 'يحتاج صيانة دورية']
        },
        {
            name: 'ألواح الفوم',
            thermal: 'جيد جداً',
            waterproof: 'متوسط',
            lifespan: '15-20 سنة',
            recommended: false,
            pros: ['سهل التركيب', 'خفيف الوزن', 'عزل حراري جيد'],
            cons: ['فجوات بين الألواح', 'يحتاج طبقة حماية']
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">مقارنة شاملة</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        أي نوع عزل يناسبك؟
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        قارن بين أنواع العزل المختلفة لاختيار الأنسب لاحتياجاتك وميزانيتك
                    </p>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {types.map((type, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${type.recommended ? 'border-brand-orange-500 relative' : 'border-gray-100'
                                }`}
                        >
                            {type.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    ⭐ الأكثر طلباً
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">{type.name}</h3>

                            {/* Specs */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">العزل الحراري</span>
                                    <span className={`font-bold ${type.thermal === 'ممتاز' ? 'text-green-600' : type.thermal === 'جيد جداً' ? 'text-blue-600' : 'text-yellow-600'}`}>
                                        {type.thermal}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">العزل المائي</span>
                                    <span className={`font-bold ${type.waterproof === 'ممتاز' ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {type.waterproof}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">العمر الافتراضي</span>
                                    <span className="font-bold text-gray-900">{type.lifespan}</span>
                                </div>
                            </div>

                            {/* Pros */}
                            <div className="mb-4">
                                <span className="text-green-600 font-bold text-sm">المميزات:</span>
                                <ul className="mt-2 space-y-1">
                                    {type.pros.map((pro, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div>
                                <span className="text-red-600 font-bold text-sm">العيوب:</span>
                                <ul className="mt-2 space-y-1">
                                    {type.cons.map((con, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="text-red-400">✗</span>
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 8.5. Service Details Tables Section
// ============================================
export function ServiceDetailsTables() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">وصف تفصيلي للخدمات</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        كل ما تحتاج معرفته عن خدماتنا
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        جداول شاملة توضح جميع تفاصيل خدمات عزل الفوم وعزل الأسطح
                    </p>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Table 1: Foam Insulation */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                            <Thermometer className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">عزل الفوم (البولي يوريثان)</h3>
                            <p className="text-gray-600">الحل الأمثل للعزل الحراري والمائي الشامل</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                        <table className="w-full">
                            <thead className="bg-gradient-to-l from-navy-600 to-navy-700">
                                <tr>
                                    <th className="px-6 py-4 text-right text-white font-bold text-lg w-1/3">العنصر</th>
                                    <th className="px-6 py-4 text-right text-white font-bold text-lg">التفاصيل والمواصفات</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">التعريف</td>
                                    <td className="px-6 py-5 text-gray-700 leading-relaxed">
                                        عزل الفوم هو نظام عزل حديث يعتمد على مادة البولي يوريثان التي تُرش على شكل سائل ثم تتمدد وتتصلب لتُشكل طبقة عازلة متماسكة. يتميز بقدرته الفائقة على منع انتقال الحرارة بفضل التركيب الخلوي المغلق الذي يحبس الهواء داخله، مما يجعله العازل الأكثر فعالية في المملكة.
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">أنواع الفوم</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <span className="font-bold text-gray-900">فوم مفتوح الخلايا:</span> أخف وزناً، كثافة 8-12 كجم/م³، مثالي للأماكن الداخلية والعزل الصوتي
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                                <div>
                                                    <span className="font-bold text-gray-900">فوم مغلق الخلايا:</span> كثافة عالية 35-40 كجم/م³، مثالي للأسطح الخارجية ويوفر عزل مائي إضافي
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">المميزات الرئيسية</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'عزل حراري ومائي في آن واحد',
                                                'يغلق جميع الفراغات والشقوق',
                                                'التصاق تام بالسطح',
                                                'مقاوم للحشرات والقوارض',
                                                'خفيف الوزن ولا يُحمّل السطح',
                                                'صديق للبيئة وآمن صحياً',
                                                'توفير 40-50% من الكهرباء',
                                                'لا يحتاج صيانة دورية'
                                            ].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <Star className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">السماكة الموصى بها</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="space-y-2">
                                            <p>• <span className="font-bold">3 سم:</span> الحد الأدنى للأسطح العادية</p>
                                            <p>• <span className="font-bold">5 سم:</span> الموصى به لأفضل النتائج</p>
                                            <p>• <span className="font-bold">7 سم:</span> للمباني المعرضة لحرارة شديدة أو المناطق الصناعية</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">الكثافة المطلوبة</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        35-40 كجم/م³ للأسطح الخارجية (الكثافة العالية تضمن أداء أفضل ومتانة أعلى)
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">العمر الافتراضي</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <span className="text-2xl font-bold text-green-600">+20 سنة</span> مع الصيانة البسيطة
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">التكلفة التقريبية</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <span className="text-xl font-bold text-navy-600">55 - 75 ريال/م²</span> (حسب السماكة والكثافة المطلوبة)
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">الضمان</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <span className="bg-brand-orange-100 text-brand-orange-700 px-4 py-2 rounded-full font-bold">ضمان 10 سنوات شامل</span>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">المباني المناسبة</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        الفلل السكنية، العمارات، المستودعات، المصانع، الهناجر، المدارس، المستشفيات، المولات التجارية
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">مدة التنفيذ</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <p>• حتى 200 م²: <span className="font-bold">يوم واحد</span></p>
                                        <p>• 200-500 م²: <span className="font-bold">1-2 يوم</span></p>
                                        <p>• أكثر من 500 م²: <span className="font-bold">2-4 أيام</span></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table 2: Roof Insulation */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                            <Home className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">عزل الأسطح الشامل</h3>
                            <p className="text-gray-600">نظام متكامل للحماية الحرارية والمائية</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                        <table className="w-full">
                            <thead className="bg-gradient-to-l from-navy-600 to-navy-700">
                                <tr>
                                    <th className="px-6 py-4 text-right text-white font-bold text-lg w-1/3">العنصر</th>
                                    <th className="px-6 py-4 text-right text-white font-bold text-lg">التفاصيل والمواصفات</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">التعريف</td>
                                    <td className="px-6 py-5 text-gray-700 leading-relaxed">
                                        عزل الأسطح الشامل هو نظام متكامل يجمع بين العزل الحراري والمائي في حل واحد. يشمل معالجة السطح وإصلاح الشقوق ثم تطبيق طبقات العزل المتعددة لحماية المبنى من الحرارة الشديدة والأمطار والرطوبة بشكل كامل.
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">طبقات العزل</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold flex-shrink-0">1</div>
                                                <div>
                                                    <span className="font-bold text-gray-900">طبقة التأسيس:</span> تنظيف السطح وإصلاح الشقوق والتعشيش
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold flex-shrink-0">2</div>
                                                <div>
                                                    <span className="font-bold text-gray-900">طبقة البرايمر:</span> مادة لاصقة تضمن التصاق العزل بالسطح
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold flex-shrink-0">3</div>
                                                <div>
                                                    <span className="font-bold text-gray-900">طبقة العزل المائي:</span> رولات بيتومين SBS أو أغشية ممبرين
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold flex-shrink-0">4</div>
                                                <div>
                                                    <span className="font-bold text-gray-900">طبقة العزل الحراري:</span> فوم بولي يوريثان أو ألواح عازلة
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 font-bold flex-shrink-0">5</div>
                                                <div>
                                                    <span className="font-bold text-gray-900">طبقة الحماية:</span> دهان عاكس للحرارة أو بلاط حراري
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">المواد المستخدمة</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'رولات البيتومين SBS/APP',
                                                'أغشية الممبرين PVC/EPDM',
                                                'الفوم البولي يوريثان',
                                                'الإسفلت المعدني',
                                                'البرايمر البيتوميني',
                                                'الدهان العاكس للحرارة',
                                                'شريط لاصق للوصلات',
                                                'مواد معالجة الشقوق'
                                            ].map((material, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                                    <span>{material}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">مقاومة الحرارة</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="flex items-center gap-4">
                                            <Thermometer className="w-8 h-8 text-red-500" />
                                            <div>
                                                <p className="text-xl font-bold text-navy-600">تخفيض 15-20 درجة مئوية</p>
                                                <p className="text-gray-500">من درجة حرارة السطح الداخلي</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">مقاومة الماء</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="flex items-center gap-4">
                                            <Droplets className="w-8 h-8 text-blue-500" />
                                            <div>
                                                <p className="text-xl font-bold text-green-600">100% منع تسرب المياه</p>
                                                <p className="text-gray-500">حماية كاملة من الأمطار والرطوبة</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">الصيانة المطلوبة</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <p><span className="font-bold">صيانة سنوية بسيطة:</span> فحص دوري للتأكد من سلامة العزل، تنظيف السطح من الأتربة، معالجة أي تشققات بسيطة قد تظهر</p>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">الضمان</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">ضمان 7-10 سنوات</span>
                                        <span className="text-gray-500 mr-3">حسب نوع العزل المستخدم</span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">التكلفة التقريبية</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="space-y-2">
                                            <p>• <span className="font-bold">العزل المائي فقط:</span> 35-50 ريال/م²</p>
                                            <p>• <span className="font-bold">العزل الحراري فقط:</span> 40-60 ريال/م²</p>
                                            <p>• <span className="font-bold">العزل الشامل:</span> 70-100 ريال/م²</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">المناطق المخدومة</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        <div className="flex flex-wrap gap-2">
                                            {['الرياض', 'الخرج', 'الدرعية', 'المزاحمية', 'الدلم', 'حوطة بني تميم'].map((area, i) => (
                                                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                                    <MapPin className="w-3 h-3 text-brand-orange-500" />
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <td className="px-6 py-5 font-bold text-navy-600">التطبيقات</td>
                                    <td className="px-6 py-5 text-gray-700">
                                        أسطح الفلل والعمارات، الأسطح الخرسانية، أسطح الشينكو، الملاحق، البيوت القديمة، المباني التجارية، المستودعات
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-l from-navy-600 to-navy-700 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            هل تريد معرفة المزيد عن خدماتنا؟
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                            تواصل معنا الآن للحصول على استشارة مجانية ومعاينة للموقع بدون أي التزام
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:0551777962" className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                                <Phone className="w-5 h-5" />
                                اتصل الآن: 0551777962
                            </a>
                            <a href="https://wa.me/0551777962" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all">
                                💬 واتساب مباشر
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 9. Expert Insights Section
// ============================================
export function ExpertInsights() {
    const tips = [
        {
            title: 'افحص السطح قبل العزل',
            content: 'تأكد من عدم وجود تسربات نشطة أو شقوق كبيرة قبل تطبيق العزل. المعالجة المسبقة توفر عليك الكثير.',
            icon: Eye
        },
        {
            title: 'لا تبخل بالسماكة',
            content: 'السماكة 3 سم هي الحد الأدنى للفوم. 5 سم تعطي نتائج أفضل بكثير وتستحق الفرق في السعر.',
            icon: Shield
        },
        {
            title: 'اطلب ضمان مكتوب',
            content: 'الضمان الشفهي لا قيمة له. اطلب شهادة ضمان مكتوبة تحدد المدة وما يشمله الضمان.',
            icon: Award
        },
        {
            title: 'راقب تنفيذ العمل',
            content: 'كن موجوداً أثناء التنفيذ أو كلف شخصاً بالمتابعة. الإشراف يضمن الالتزام بالمواصفات.',
            icon: Users
        },
        {
            title: 'تجنب العزل في الرطوبة',
            content: 'لا تقبل تنفيذ العزل في الأمطار أو الرطوبة العالية. الجفاف ضروري لالتصاق المواد.',
            icon: Droplets
        },
        {
            title: 'قارن أكثر من عرض',
            content: 'لا تقبل أول عرض. قارن 3 عروض على الأقل، لكن لا تختر الأرخص فقط - قارن الجودة والضمان.',
            icon: Target
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-brand-orange-50 to-orange-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-600 font-semibold text-lg">نصائح الخبراء</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        6 نصائح ذهبية قبل عزل سطحك
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        من خبرتنا الطويلة، جمعنا لك أهم النصائح لضمان حصولك على أفضل نتيجة
                    </p>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tips.map((tip, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-brand-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <tip.icon className="w-6 h-6 text-brand-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 10. Extended FAQ Section
// ============================================
export function ExtendedFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: 'كم تكلفة عزل الفوم بالمتر المربع في الرياض؟',
            answer: `تتراوح تكلفة عزل الفوم في الرياض بين 55-75 ريال للمتر المربع، وتختلف حسب:
            
• سماكة الفوم: 3 سم (55-60 ريال) - 5 سم (65-75 ريال)
• مساحة السطح: المساحات الكبيرة تحصل على سعر أفضل
• حالة السطح: إذا كان يحتاج إصلاحات مسبقة
• الموقع: داخل الرياض أو المناطق البعيدة

نقدم معاينة مجانية وعرض سعر تفصيلي قبل البدء.`
        },
        {
            question: 'ما الفرق بين عزل الفوم والعزل البيتوميني؟',
            answer: `الفرق الجوهري هو أن عزل الفوم يوفر عزلاً حرارياً ومائياً معاً، بينما البيتومين عزل مائي فقط:

عزل الفوم:
✓ عزل حراري ممتاز (يوفر 40-50% من الكهرباء)
✓ عزل مائي جيد
✓ عمر افتراضي 20+ سنة
✗ سعر أعلى

العزل البيتوميني:
✓ عزل مائي ممتاز
✓ سعر اقتصادي
✗ لا يوفر عزل حراري
✗ يحتاج صيانة كل 5-7 سنوات

نوصي بالفوم للمباني السكنية، والبيتومين للمستودعات والأماكن التي لا تحتاج تكييف.`
        },
        {
            question: 'كم سنة يستمر ضمان العزل؟',
            answer: `نقدم ضمان يصل إلى 10 سنوات على أعمال العزل، ويشمل:

• إصلاح أي تسربات تظهر بسبب خلل في العزل
• إعادة تطبيق العزل في المناطق المتضررة
• زيارات صيانة دورية (حسب الباقة)

الضمان لا يشمل:
- الأضرار الناتجة عن أعمال بناء أو تعديلات
- الكوارث الطبيعية
- سوء الاستخدام

نسلمك شهادة ضمان مكتوبة وموثقة عند استلام المشروع.`
        },
        {
            question: 'هل يمكن عزل السطح في الشتاء؟',
            answer: `نعم، يمكن تنفيذ أعمال العزل في الشتاء مع بعض الاحتياطات:

الشروط المطلوبة:
• عدم وجود أمطار أثناء التنفيذ
• جفاف السطح تماماً
• درجة حرارة أعلى من 10 درجات

الشتاء في الرياض مثالي للعزل لأن:
- درجات الحرارة معتدلة
- الطقس جاف غالباً
- أسعار أفضل بسبب قلة الطلب

ننصح بتجنب التنفيذ في أيام المطر فقط.`
        },
        {
            question: 'كم يوم يحتاج عزل سطح فيلا 300 متر؟',
            answer: `عزل فيلا بمساحة 300 م² يحتاج من 2-3 أيام عمل:

اليوم الأول:
- تنظيف السطح وإزالة المخلفات
- إصلاح الشقوق والعيوب
- تحضير السطح للعزل

اليوم الثاني:
- تطبيق عزل الفوم بالسماكة المطلوبة
- التأكد من تغطية جميع المناطق

اليوم الثالث (إن لزم):
- تطبيق طبقة الحماية
- التنظيف النهائي والتسليم

ملاحظة: المدة قد تزيد إذا كان السطح يحتاج إصلاحات كبيرة.`
        },
        {
            question: 'هل عزل الفوم آمن صحياً؟',
            answer: `نعم، عزل الفوم آمن تماماً بعد الجفاف والتصلب:

أثناء التطبيق:
- يُنصح بعدم التواجد في المبنى
- الفريق يرتدي معدات الحماية
- التهوية ضرورية

بعد 24-48 ساعة:
- المادة تتصلب تماماً
- لا توجد أي انبعاثات
- آمن للسكن

الفوم المستخدم:
- معتمد من الجهات الصحية
- خالي من المواد السامة
- لا يتفاعل مع الحرارة أو الرطوبة`
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-500 font-semibold text-lg">الأسئلة الشائعة</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
                        إجابات شاملة لأهم التساؤلات
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-100 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-gray-900 flex-1">{faq.question}</h3>
                                {openIndex === idx ? (
                                    <ChevronUp className="w-6 h-6 text-brand-orange-500 flex-shrink-0 mr-4" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 mr-4" />
                                )}
                            </button>

                            {openIndex === idx && (
                                <div className="px-6 pb-6 pt-2">
                                    <div className="prose text-gray-600 whitespace-pre-line leading-relaxed bg-white rounded-xl p-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 11. Trust & Authority Section
// ============================================
export function TrustAuthority() {
    const stats = [
        { value: '+2000', label: 'مشروع منجز', description: 'في الرياض والمناطق المجاورة' },
        { value: '15+', label: 'سنة خبرة', description: 'منذ 2009 في خدمتكم' },
        { value: '100%', label: 'رضا العملاء', description: 'بناءً على التقييمات' },
        { value: '10', label: 'سنوات ضمان', description: 'على جميع أعمالنا' }
    ]

    const certifications = [
        'شركة مرخصة ومعتمدة',
        'أعضاء في جمعية المقاولين',
        'مواد معتمدة من هيئة المواصفات',
        'فريق مدرب ومؤهل'
    ]

    return (
        <section className="py-20 bg-navy-700">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-orange-300 font-semibold text-lg">لماذا نحن؟</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
                        ثقة آلاف العملاء اختيار صائب
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10">
                            <div className="text-4xl md:text-5xl font-bold text-brand-orange-400 mb-2">{stat.value}</div>
                            <div className="text-white font-semibold mb-1">{stat.label}</div>
                            <div className="text-gray-400 text-sm">{stat.description}</div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="bg-white/10 backdrop-blur rounded-3xl p-8 max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold text-white text-center mb-6">اعتماداتنا وشهاداتنا</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-200">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 12. Soft CTA Content Section
// ============================================
export function SoftCTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        جاهز لحماية منزلك من حرارة الصيف؟
                    </h2>

                    <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-10">
                        <p>
                            بعد أن تعرفت على أنواع العزل ومميزات كل نوع، الخطوة التالية بسيطة.
                            تواصل معنا للحصول على معاينة مجانية لسطحك وعرض سعر تفصيلي يناسب احتياجاتك وميزانيتك.
                        </p>
                        <p>
                            فريقنا جاهز للإجابة على جميع استفساراتك وتقديم الاستشارة المناسبة.
                            لا تتردد في الاتصال أو إرسال رسالة واتساب - نرد خلال ساعة واحدة.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="tel:0551777962"
                            className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-brand-orange-500/30"
                        >
                            <Phone className="w-6 h-6" />
                            اتصل الآن: 0551777962
                        </Link>
                        <Link
                            href="https://wa.me/0551777962"
                            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg"
                        >
                            💬 راسلنا واتساب
                        </Link>
                    </div>

                    <p className="text-gray-500 mt-8 text-sm">
                        متاحون من السبت إلى الخميس، 8 صباحاً - 10 مساءً
                    </p>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 13. Visual Long-Form Section
// ============================================
export function VisualLongForm() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Article Content */}
                    <div className="lg:w-2/3 space-y-8">
                        <div>
                            <span className="text-brand-orange-500 font-bold tracking-wider uppercase text-sm">دليل شامل</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                لماذا يعتبر العزل استثماراً وليس تكلفة؟
                            </h2>
                            <div className="w-20 h-1.5 bg-brand-orange-500 rounded-full mb-8" />

                            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                <p>
                                    يعتقد الكثيرون أن تكلفة العزل عند بناء المنزل أو ترميمه هي مصاريف إضافية يمكن الاستغناء عنها.
                                    لكن الحقيقة والأرقام تثبت عكس ذلك تماماً. العزل هو الاستثمار الوحيد في المبنى الذي يدفع تكلفته بنفسه
                                    خلال سنوات قليلة ثم يبدأ بتحقيق أرباح لك على شكل توفير دائم.
                                </p>
                                <p>
                                    في بيئة الرياض الحارة، تستهلك أجهزة التكييف حوالي 70% من فاتورة الكهرباء في الصيف.
                                    المبنى غير المعزول هو بمثابة "مصفاة حرارية"، حيث تتسرب البرودة للخارج وتدخل الحرارة للداخل،
                                    مما يجبر المكيفات على العمل بأقصى طاقة طوال الوقت دون توقف.
                                </p>

                                <div className="my-8 relative h-80 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/polyurethane-foam-insulation-application.webp"
                                        alt="مقارنة استهلاك الطاقة"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <p className="text-white font-bold text-lg">دراسة تثبت توفير 40-50% من الطاقة في المباني المعزولة</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">حماية الهيكل الإنشائي للمبنى</h3>
                                <p>
                                    لا يقتصر دور العزل على التوفير المادي فقط. الخرسانة المسلحة تتأثر بشكل كبير بالتغيرات الحرارية (التمدد والانكماش)
                                    وبالرطوبة (صدأ الحديد). العزل يحمي الهيكل الإنشائي من هذه العوامل، مما يطيل عمر المبنى الافتراضي لعقود إضافية
                                    ويمنع ظهور الشقوق والتصدعات الخطيرة التي تكلف إصلاحها مبالغ طائلة.
                                </p>

                                <ul className="bg-gray-50 p-6 rounded-xl border border-gray-200 list-none space-y-3 mt-6">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>حماية حديد التسليح من الصدأ والتآكل</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>منع نمو العفن والفطريات الضارة بالصحة</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>الحفاظ على الأثاث والديكورات من الرطوبة</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="sticky top-24">
                            {/* Summary Card */}
                            <div className="bg-navy-700 text-white p-8 rounded-3xl shadow-xl mb-8">
                                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-brand-orange-400" />
                                    نقاط رئيسية
                                </h4>
                                <ul className="space-y-4 text-gray-300 text-sm">
                                    <li className="border-b border-navy-500 pb-3 last:border-0">
                                        • استرداد تكلفة العزل خلال 2-3 سنوات من توفير الكهرباء
                                    </li>
                                    <li className="border-b border-navy-500 pb-3 last:border-0">
                                        • حماية المبنى من الشقوق والتصدعات الهيكلية
                                    </li>
                                    <li className="border-b border-navy-500 pb-3 last:border-0">
                                        • زيادة قيمة العقار عند البيع أو التأجير
                                    </li>
                                </ul>
                            </div>

                            {/* Image Card */}
                            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg group">
                                <Image
                                    src="/images/technician-applying-spray-foam-in-attic.webp"
                                    alt="فريق العمل"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute bottom-6 right-6 text-white">
                                    <p className="font-bold text-lg">فريق محترف</p>
                                    <p className="text-sm opacity-90">خبرة 15 عاماً في الميدان</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 14. SEO Topic Cluster
// ============================================
export function SEOTopicCluster() {
    const topics = [
        { name: 'عزل فوم بالرياض', count: 12 },
        { name: 'أفضل شركة عزل مائي', count: 8 },
        { name: 'سعر متر العزل', count: 5 },
        { name: 'عزل اسطح شينكو', count: 7 },
        { name: 'عزل خزانات المياه', count: 9 },
        { name: 'كشف تسربات المياه', count: 15 },
        { name: 'عزل بولي يوريثان', count: 6 },
        { name: 'عزل الحمامات', count: 4 },
        { name: 'شركات عزل معتمدة', count: 11 },
        { name: 'أرخص عزل فوم', count: 3 },
        { name: 'عزل صوتي للجدران', count: 2 },
        { name: 'صيانة عزل الاسطح', count: 5 }
    ]

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                        <Search className="w-6 h-6 text-brand-orange-500" />
                        الأكثر بحثاً في عزل الأسطح
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {topics.map((topic, idx) => (
                        <span
                            key={idx}

                            className="bg-white hover:bg-brand-orange-50 border border-gray-200 hover:border-brand-orange-200 rounded-full px-6 py-2 text-gray-600 hover:text-brand-orange-600 transition-all text-sm font-medium flex items-center gap-2"
                        >
                            {topic.name}
                            <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded-full">
                                {topic.count}
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 15. Visual Proof Section (Gallery)
// ============================================
export function VisualProof() {
    const images = [
        { src: '/images/spray-foam-roofing-01.webp', title: 'عزل فوم لفيلا سكنية', loc: 'حي الملقا' },
        { src: '/images/roof.webp', title: 'عزل مائي للأسطح', loc: 'الدرعية' },
        { src: '/images/attic-with-completed-spray-foam-insulation.webp', title: 'عزل هناجر ومستودعات', loc: 'الصناعية الثانية' },
        { src: '/images/technician-applying-spray-foam-in-attic.webp', title: 'عزل أسطح مبلطة', loc: 'حي اليرموك' },
        { src: '/images/closed-cell-spray-foam-on-house-garage-walls.webp', title: 'عزل الجدران والجراجات', loc: 'حي النخيل' },
        { src: '/images/worker-installing-foam-insulation-in-crawl-space.webp', title: 'عزل المساحات الضيقة', loc: 'لبن' }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-orange-500 font-semibold uppercase tracking-wider">معرض الأعمال</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            شاهد جودة عملنا بالصور
                        </h2>
                    </div>
                    <Link
                        href="/gallery"
                        className="flex items-center gap-2 text-navy-600 font-bold hover:text-brand-orange-500 transition-colors"
                    >
                        شاهد كل المشاريع
                        <ExternalLink className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer">
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                            <div className="absolute bottom-0 p-6 w-full">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-brand-orange-400 text-sm font-medium mb-1 block">{img.loc}</span>
                                    <h3 className="text-white text-xl font-bold flex items-center justify-between">
                                        {img.title}
                                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                            <ImageIcon className="w-5 h-5 text-white" />
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

