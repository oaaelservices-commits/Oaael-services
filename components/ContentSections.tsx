'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Lightbulb, HelpCircle } from 'lucide-react'
import Image from 'next/image'

// ============================================
// 1. Introduction Block Component
// ============================================
interface IntroBlockProps {
    title: string
    subtitle?: string
    paragraphs: string[]
    image?: string
    imageAlt?: string
    highlights?: { icon: React.ReactNode; text: string }[]
}

export function IntroBlock({ title, subtitle, paragraphs, image, imageAlt, highlights }: IntroBlockProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        {subtitle && (
                            <span className="text-brand-orange-500 font-semibold text-lg">{subtitle}</span>
                        )}
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
                            {title}
                        </h2>
                        <div className="space-y-4">
                            {paragraphs.map((para, idx) => (
                                <p key={idx} className="text-gray-600 text-lg leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </div>
                        {highlights && (
                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                        <div className="text-brand-orange-500">{item.icon}</div>
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    {image && (
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={image}
                                    alt={imageAlt || title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy-500/20 rounded-full blur-2xl"></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 2. Detailed Explanation Section
// ============================================
interface DetailedSectionProps {
    title: string
    subtitle?: string
    sections: {
        title: string
        content: string
        image?: string
    }[]
}

export function DetailedSection({ title, subtitle, sections }: DetailedSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    {subtitle && (
                        <span className="text-brand-orange-500 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{title}</h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Sections */}
                <div className="space-y-16">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-brand-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                        {idx + 1}
                                    </span>
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>
                            </div>
                            {section.image && (
                                <div className={`relative h-72 rounded-2xl overflow-hidden shadow-lg ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <Image src={section.image} alt={section.title} fill className="object-cover" />
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
// 3. Work Steps Timeline
// ============================================
interface WorkStep {
    number: number
    title: string
    description: string
    icon?: React.ReactNode
}

interface WorkStepsProps {
    title: string
    subtitle?: string
    steps: WorkStep[]
}

export function WorkStepsTimeline({ title, subtitle, steps }: WorkStepsProps) {
    return (
        <section className="py-20 bg-navy-500 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    {subtitle && (
                        <span className="text-brand-orange-300 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{title}</h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-orange-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                                {step.number}
                            </div>

                            {/* Icon */}
                            {step.icon && (
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-brand-orange-300">
                                    {step.icon}
                                </div>
                            )}

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 4. Comparison Table
// ============================================
interface ComparisonRow {
    feature: string
    options: (string | boolean)[]
}

interface ComparisonTableProps {
    title: string
    subtitle?: string
    headers: string[]
    rows: ComparisonRow[]
    recommendedIndex?: number
}

export function ComparisonTable({ title, subtitle, headers, rows, recommendedIndex }: ComparisonTableProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    {subtitle && (
                        <span className="text-brand-orange-500 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{title}</h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-right p-4 bg-gray-50 rounded-tr-2xl font-bold text-gray-700">المواصفات</th>
                                {headers.map((header, idx) => (
                                    <th
                                        key={idx}
                                        className={`p-4 text-center font-bold ${idx === recommendedIndex
                                                ? 'bg-brand-orange-500 text-white'
                                                : 'bg-gray-50 text-gray-700'
                                            } ${idx === headers.length - 1 ? 'rounded-tl-2xl' : ''}`}
                                    >
                                        {header}
                                        {idx === recommendedIndex && (
                                            <span className="block text-xs mt-1 font-normal">⭐ موصى به</span>
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, rowIdx) => (
                                <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="p-4 font-medium text-gray-800 border-b border-gray-100">{row.feature}</td>
                                    {row.options.map((option, optIdx) => (
                                        <td
                                            key={optIdx}
                                            className={`p-4 text-center border-b ${optIdx === recommendedIndex ? 'bg-brand-orange-50' : ''
                                                } border-gray-100`}
                                        >
                                            {typeof option === 'boolean' ? (
                                                option ? (
                                                    <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                                                ) : (
                                                    <span className="text-gray-300">—</span>
                                                )
                                            ) : (
                                                <span className="text-gray-700">{option}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 5. Extended FAQ Accordion
// ============================================
interface FAQItem {
    question: string
    answer: string
    category?: string
}

interface ExtendedFAQProps {
    title: string
    subtitle?: string
    faqs: FAQItem[]
}

export function ExtendedFAQ({ title, subtitle, faqs }: ExtendedFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-orange-50 px-4 py-2 rounded-full mb-4">
                        <HelpCircle className="w-5 h-5 text-brand-orange-500" />
                        <span className="text-navy-600 font-semibold">{subtitle || 'الأسئلة الشائعة'}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-brand-orange-200 shadow-lg' : 'border-gray-100'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-right p-6 flex justify-between items-center gap-4"
                            >
                                <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-navy-500' : 'text-gray-900'
                                    }`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index
                                        ? 'bg-brand-orange-500 text-white rotate-180'
                                        : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    <ChevronDown className="h-5 w-5" />
                                </span>
                            </button>

                            <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="px-6 pb-6">
                                    <div className="h-px bg-gray-100 mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
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
// 6. Common Mistakes Section
// ============================================
interface Mistake {
    title: string
    problem: string
    solution: string
}

interface CommonMistakesProps {
    title: string
    subtitle?: string
    mistakes: Mistake[]
}

export function CommonMistakes({ title, subtitle, mistakes }: CommonMistakesProps) {
    return (
        <section className="py-20 bg-red-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span className="text-red-700 font-semibold">{subtitle || 'تجنب هذه الأخطاء'}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
                </div>

                {/* Mistakes Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {mistakes.map((mistake, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
                            <div className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-500 rounded-full flex items-center justify-center font-bold">
                                    ✕
                                </span>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{mistake.title}</h3>
                                    <p className="text-gray-600 mb-4">{mistake.problem}</p>
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                        <div className="flex items-center gap-2 text-green-700 font-semibold mb-2">
                                            <CheckCircle className="w-5 h-5" />
                                            الحل الصحيح:
                                        </div>
                                        <p className="text-green-800">{mistake.solution}</p>
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
// 7. Expert Tips Section
// ============================================
interface Tip {
    title: string
    description: string
    icon?: React.ReactNode
}

interface ExpertTipsProps {
    title: string
    subtitle?: string
    tips: Tip[]
}

export function ExpertTips({ title, subtitle, tips }: ExpertTipsProps) {
    return (
        <section className="py-20 bg-gradient-to-br from-navy-500 to-navy-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-brand-orange-500/20 backdrop-blur px-4 py-2 rounded-full mb-4">
                        <Lightbulb className="w-5 h-5 text-brand-orange-300" />
                        <span className="text-brand-orange-300 font-semibold">{subtitle || 'نصائح الخبراء'}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                </div>

                {/* Tips Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tips.map((tip, idx) => (
                        <div
                            key={idx}
                            className="group bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-brand-orange-500 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                                {tip.icon || (idx + 1)}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 8. Statistics Counter Section
// ============================================
interface Stat {
    value: string
    label: string
    suffix?: string
}

interface StatisticsProps {
    title?: string
    stats: Stat[]
    variant?: 'light' | 'dark'
}

export function Statistics({ title, stats, variant = 'light' }: StatisticsProps) {
    const isDark = variant === 'dark'

    return (
        <section className={`py-16 ${isDark ? 'bg-navy-500 text-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {title && (
                    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h2>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-brand-orange-300' : 'text-navy-500'}`}>
                                {stat.value}
                                {stat.suffix && <span className="text-2xl">{stat.suffix}</span>}
                            </div>
                            <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 9. CTA Banner
// ============================================
interface CTABannerProps {
    title: string
    description?: string
    primaryButton: { text: string; href: string }
    secondaryButton?: { text: string; href: string }
    variant?: 'orange' | 'navy'
}

export function CTABanner({ title, description, primaryButton, secondaryButton, variant = 'navy' }: CTABannerProps) {
    const isOrange = variant === 'orange'

    return (
        <section className={`py-16 ${isOrange ? 'bg-gradient-to-r from-brand-orange-500 to-brand-orange-600' : 'bg-gradient-to-r from-navy-500 to-navy-600'} text-white`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                {description && (
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">{description}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={primaryButton.href}
                        className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${isOrange
                                ? 'bg-white text-brand-orange-500 hover:bg-gray-100'
                                : 'bg-brand-orange-500 text-white hover:bg-brand-orange-600'
                            }`}
                    >
                        {primaryButton.text}
                    </a>
                    {secondaryButton && (
                        <a
                            href={secondaryButton.href}
                            className="px-8 py-4 rounded-xl font-bold text-lg bg-white/10 backdrop-blur hover:bg-white/20 transition-all border border-white/20"
                        >
                            {secondaryButton.text}
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 10. Related Services
// ============================================
interface RelatedService {
    title: string
    description: string
    href: string
    icon?: React.ReactNode
}

interface RelatedServicesProps {
    title: string
    services: RelatedService[]
}

export function RelatedServices({ title, services }: RelatedServicesProps) {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <a
                            key={idx}
                            href={service.href}
                            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                        >
                            {service.icon && (
                                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-4 text-navy-500 group-hover:bg-navy-500 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                            )}
                            <h4 className="font-bold text-gray-900 group-hover:text-navy-500 mb-2 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
