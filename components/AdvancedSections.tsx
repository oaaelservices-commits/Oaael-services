'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play, ChevronLeft, ChevronRight, Star, Quote, MapPin, Eye, Camera } from 'lucide-react'

// ============================================
// 11. Case Study Card
// ============================================
interface CaseStudyProps {
    title: string
    location: string
    challenge: string
    solution: string
    results: { label: string; value: string }[]
    beforeImage?: string
    afterImage?: string
}

export function CaseStudy({ title, location, challenge, solution, results, beforeImage, afterImage }: CaseStudyProps) {
    const [showAfter, setShowAfter] = useState(false)

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Before/After Images */}
                        <div className="relative">
                            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                                {beforeImage && afterImage && (
                                    <>
                                        <Image
                                            src={showAfter ? afterImage : beforeImage}
                                            alt={showAfter ? 'بعد' : 'قبل'}
                                            fill
                                            className="object-cover transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                            <span className={`px-4 py-2 rounded-full text-sm font-bold ${showAfter ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                                                }`}>
                                                {showAfter ? '✓ بعد العزل' : 'قبل العزل'}
                                            </span>
                                            <button
                                                onClick={() => setShowAfter(!showAfter)}
                                                className="bg-white/90 hover:bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-800 transition-colors flex items-center gap-2"
                                            >
                                                <Eye className="w-4 h-4" />
                                                {showAfter ? 'عرض قبل' : 'عرض بعد'}
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <div className="flex items-center gap-2 text-brand-orange-500 mb-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm font-medium">{location}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">التحدي:</h4>
                                    <p className="text-gray-600">{challenge}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">الحل:</h4>
                                    <p className="text-gray-600">{solution}</p>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="grid grid-cols-3 gap-4">
                                {results.map((result, idx) => (
                                    <div key={idx} className="bg-navy-50 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-bold text-navy-500">{result.value}</div>
                                        <div className="text-sm text-gray-600">{result.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 12. Testimonials Carousel
// ============================================
interface Testimonial {
    name: string
    role?: string
    location: string
    text: string
    rating: number
    image?: string
}

interface TestimonialsCarouselProps {
    title: string
    subtitle?: string
    testimonials: Testimonial[]
}

export function TestimonialsCarousel({ title, subtitle, testimonials }: TestimonialsCarouselProps) {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((current + 1) % testimonials.length)
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    {subtitle && (
                        <span className="text-brand-orange-300 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
                </div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12">
                        <Quote className="w-12 h-12 text-brand-orange-400 mb-6" />

                        <p className="text-xl md:text-2xl leading-relaxed mb-8">
                            &ldquo;{testimonials[current].text}&rdquo;
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-brand-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                                    {testimonials[current].name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold">{testimonials[current].name}</div>
                                    <div className="text-gray-300 text-sm">{testimonials[current].location}</div>
                                </div>
                            </div>

                            <div className="flex gap-1">
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === current ? 'w-8 bg-brand-orange-500' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ============================================
// 13. Image Gallery Grid
// ============================================
interface GalleryImage {
    src: string
    alt: string
    title?: string
    location?: string
}

interface ImageGalleryProps {
    title: string
    subtitle?: string
    images: GalleryImage[]
}

export function ImageGallery({ title, subtitle, images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    {subtitle && (
                        <span className="text-brand-orange-500 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    {image.title && <div className="font-bold">{image.title}</div>}
                                    {image.location && (
                                        <div className="text-sm text-gray-300 flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {image.location}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="w-5 h-5 text-navy-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-brand-orange-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <div className="relative max-w-4xl w-full h-[80vh]">
                            <Image
                                src={images[selectedImage].src}
                                alt={images[selectedImage].alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

// ============================================
// 14. Pricing Cards
// ============================================
interface PricingTier {
    name: string
    price: string
    unit: string
    description: string
    features: string[]
    highlighted?: boolean
    badge?: string
}

interface PricingCardsProps {
    title: string
    subtitle?: string
    tiers: PricingTier[]
}

export function PricingCards({ title, subtitle, tiers }: PricingCardsProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    {subtitle && (
                        <span className="text-brand-orange-500 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-3xl p-8 transition-all ${tier.highlighted
                                ? 'bg-navy-500 text-white shadow-2xl scale-105'
                                : 'bg-gray-50 border border-gray-200 hover:shadow-xl'
                                }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    {tier.badge}
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-4 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                {tier.name}
                            </h3>

                            <div className="mb-6">
                                <span className={`text-4xl font-bold ${tier.highlighted ? 'text-brand-orange-300' : 'text-navy-500'}`}>
                                    {tier.price}
                                </span>
                                <span className={tier.highlighted ? 'text-gray-300' : 'text-gray-500'}>
                                    {' '}{tier.unit}
                                </span>
                            </div>

                            <p className={`mb-6 ${tier.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                                {tier.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, fidx) => (
                                    <li key={fidx} className="flex items-center gap-2">
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${tier.highlighted ? 'bg-brand-orange-500' : 'bg-green-500 text-white'
                                            }`}>
                                            ✓
                                        </span>
                                        <span className={tier.highlighted ? 'text-gray-200' : 'text-gray-600'}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="tel:0551777962"
                                className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${tier.highlighted
                                    ? 'bg-brand-orange-500 text-white hover:bg-brand-orange-600'
                                    : 'bg-navy-500 text-white hover:bg-navy-600'
                                    }`}
                            >
                                اطلب عرض سعر
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 15. Areas Covered Map
// ============================================
interface Area {
    name: string
    districts: string[]
}

interface AreasCoveredProps {
    title: string
    subtitle?: string
    areas: Area[]
}

export function AreasCovered({ title, subtitle, areas }: AreasCoveredProps) {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    {subtitle && (
                        <span className="text-brand-orange-500 font-semibold text-lg">{subtitle}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{title}</h2>
                    <div className="w-24 h-1.5 bg-brand-orange-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Areas Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-navy-500 text-white rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {area.districts.map((district, didx) => (
                                    <span
                                        key={didx}
                                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {district}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 16. Tech Specs Table
// ============================================
export interface TechSpecItem {
    label: string
    value: string
    icon?: React.ReactNode
}

export interface TechSpecsProps {
    title: string
    specs: TechSpecItem[]
}

export function TechSpecs({ title, specs }: TechSpecsProps) {
    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <span className="font-medium text-gray-600 flex items-center gap-2">
                                {spec.icon && <span className="text-brand-orange-500">{spec.icon}</span>}
                                {spec.label}
                            </span>
                            <span className="font-bold text-navy-600">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ============================================
// 17. Material Showcase (Split Comparison)
// ============================================
export interface MaterialType {
    title: string
    description: string
    features: string[]
    image: string
    recommendedFor: string
}

export interface MaterialShowcaseProps {
    title: string
    subtitle?: string
    materials: MaterialType[]
}

export function MaterialShowcase({ title, subtitle, materials }: MaterialShowcaseProps) {
    return (
        <section className="py-20 bg-navy-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {subtitle && <span className="text-brand-orange-400 font-semibold">{subtitle}</span>}
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {materials.map((material, idx) => (
                        <div key={idx} className="group relative bg-navy-800 rounded-3xl overflow-hidden border border-navy-700 hover:border-brand-orange-500/50 transition-all">
                            <div className="relative h-64">
                                <Image
                                    src={material.image}
                                    alt={material.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                                <div className="absolute bottom-4 right-4">
                                    <h3 className="text-2xl font-bold">{material.title}</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {material.description}
                                </p>
                                <div className="mb-6">
                                    <h4 className="text-brand-orange-400 font-bold text-sm mb-3 uppercase tracking-wider">المميزات الرئيسية</h4>
                                    <ul className="space-y-2">
                                        {material.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-500"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-navy-950/50 rounded-xl p-4 border border-navy-700">
                                    <span className="text-gray-400 text-xs block mb-1">يوصى به لـ:</span>
                                    <span className="font-semibold text-white">{material.recommendedFor}</span>
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
// 18. Process Visualizer
// ============================================
export interface ProcessStep {
    title: string
    description: string
    image: string
}

export interface ProcessVisualizerProps {
    title: string
    steps: ProcessStep[]
}

export function ProcessVisualizer({ title, steps }: ProcessVisualizerProps) {
    const [activeStep, setActiveStep] = useState(0)

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">{title}</h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Steps List */}
                    <div className="space-y-4">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveStep(idx)}
                                className={`p-6 rounded-2xl cursor-pointer transition-all ${activeStep === idx
                                    ? 'bg-white shadow-xl border-l-4 border-brand-orange-500 scale-105'
                                    : 'bg-white/50 border border-gray-100 hover:bg-white'
                                    }`}
                            >
                                <div className="flex gap-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${activeStep === idx ? 'bg-brand-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                                        }`}>
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 ${activeStep === idx ? 'text-gray-900' : 'text-gray-600'
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`leading-relaxed ${activeStep === idx ? 'text-gray-600' : 'text-gray-400'
                                            }`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Display */}
                    <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-500 ${activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 right-8 text-white max-w-md">
                                    <div className="text-brand-orange-400 font-bold mb-2">الخطوة {idx + 1}</div>
                                    <h4 className="text-3xl font-bold">{step.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
