'use client'

import Script from 'next/script'

interface Review {
  author: string
  datePublished?: string
  reviewBody: string
  reviewRating: number
}

interface AggregateRating {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}

interface StructuredDataProps {
  type?: 'website' | 'localBusiness' | 'service' | 'article'
  pageData?: {
    title?: string
    description?: string
    url?: string
    publishedTime?: string
    modifiedTime?: string
    author?: string
    category?: string
    image?: string
  }
  reviews?: Review[]
  aggregateRating?: AggregateRating
}

export default function StructuredData({ type = 'website', pageData, reviews, aggregateRating }: StructuredDataProps) {
  const baseUrl = 'https://elazzl.sa'
  const companyName = 'شركة اوائل العزل - الرياض'
  const companyPhone = '0551777962'
  const companyLogo = `${baseUrl}/logo.png`
  const companyDescription = 'شركة عزل فوم بالرياض وخبرة 15 سنة في العزل المائي والحراري. نقدم خدماتنا بضمان 15 سنة وتوفير 50% من الكهرباء. اتصل: 0551777962'

  // Default Aggregate Rating
  const defaultAggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "285",
    "bestRating": "5",
    "worstRating": "1"
  }

  const currentAggregateRating = aggregateRating ? {
    "@type": "AggregateRating",
    "ratingValue": aggregateRating.ratingValue.toString(),
    "reviewCount": aggregateRating.reviewCount.toString(),
    "bestRating": (aggregateRating.bestRating || 5).toString(),
    "worstRating": (aggregateRating.worstRating || 1).toString()
  } : defaultAggregateRating

  // Reviews Schema
  const reviewSchema = reviews?.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.datePublished || new Date().toISOString().split('T')[0],
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.reviewRating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  }))

  // Organization/LocalBusiness Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${baseUrl}/#organization`,
    "name": companyName,
    "alternateName": ["اوائل العزل"],
    "url": baseUrl,
    "logo": companyLogo,
    "description": companyDescription,
    "foundingDate": "2010",
    "telephone": companyPhone,
    "email": "info@elazzl.sa",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Wire Transfer"],
    "currenciesAccepted": "SAR",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA",
      "postalCode": "11564",
      "streetAddress": "شارع الملك فهد، حي الصحافة"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": [
      { "@type": "City", "name": "الرياض", "addressCountry": "SA" },
      { "@type": "City", "name": "الخرج", "addressCountry": "SA" },
      { "@type": "City", "name": "المزاحمية", "addressCountry": "SA" },
      { "@type": "City", "name": "الدرعية", "addressCountry": "SA" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "06:00",
      "closes": "23:59"
    },
    "aggregateRating": currentAggregateRating,
    "sameAs": [
      "https://twitter.com/elazzl_sa",
      "https://instagram.com/elazzl_sa"
    ]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "أفضل شركة عزل فوم بالرياض",
    "description": companyDescription,
    "publisher": { "@id": `${baseUrl}/#organization` },
    "inLanguage": "ar-SA",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // Service Schema
  const serviceSchema = type === 'service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageData?.title || "خدمات العزل بالرياض",
    "serviceType": "Insulation",
    "description": pageData?.description || "خدمات عزل فوم وحراري ومائي للأسطح والخزانات بالرياض والخرج.",
    "provider": { "@id": `${baseUrl}/#organization` },
    "areaServed": {
      "@type": "City",
      "name": "الرياض",
      "addressCountry": "SA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "باقات العزل",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "عزل فوم اقتصادي (3 سم)",
          "description": "عزل فوم بولي يوريثان سماكة 3 سم مع طبقة حماية",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "25",
            "priceCurrency": "SAR",
            "unitCode": "MTK",
            "valueAddedTaxIncluded": true
          }
        },
        {
          "@type": "Offer",
          "name": "عزل فوم قياسي (4 سم)",
          "description": "عزل فوم بولي يوريثان سماكة 4 سم مع ضمان 10 سنوات",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "30",
            "priceCurrency": "SAR",
            "unitCode": "MTK",
            "valueAddedTaxIncluded": true
          }
        },
        {
          "@type": "Offer",
          "name": "عزل فوم بريميوم (5 سم)",
          "description": "عزل فوم عالي الكثافة سماكة 5 سم للمشاريع الكبرى",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "35",
            "priceCurrency": "SAR",
            "unitCode": "MTK",
            "valueAddedTaxIncluded": true
          }
        }
      ]
    },
    "aggregateRating": currentAggregateRating,
    "review": reviewSchema
  } : null

  const getSchemas = () => {
    const schemas: any[] = [organizationSchema, websiteSchema]
    if (serviceSchema) schemas.push(serviceSchema)
    // Add other schemas logic here if needed
    return schemas
  }

  return (
    <>
      {getSchemas().map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
