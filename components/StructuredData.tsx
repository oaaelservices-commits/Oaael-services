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
  const companyName = 'شركة عزل أسطح بالرياض'
  const companyPhone = '0551777962'
  const companyLogo = `${baseUrl}/logo.png`
  const companyDescription = 'شركة عزل أسطح بالرياض والخرج متخصصة في عزل الفوم والعزل الحراري والمائي. خبرة 15 سنة وضمان 10 سنوات. اتصل: 0551777962'

  // Default Aggregate Rating (fallback if not provided specific)
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

  // Format Reviews for Schema
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
    "alternateName": ["شركة عزل فوم بالرياض", "Exzo Insulation", "مؤسسة العزل المتقدم"],
    "url": baseUrl,
    "logo": companyLogo,
    "description": companyDescription,
    "foundingDate": "2010",
    "telephone": companyPhone,
    "email": "info@elazzl.sa",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA",
      "postalCode": "11564"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.7136",
      "longitude": "46.6753"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "الرياض",
        "addressCountry": "SA"
      },
      {
        "@type": "City",
        "name": "الخرج",
        "addressCountry": "SA"
      }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "23:00"
    },
    "aggregateRating": currentAggregateRating
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": companyName,
    "description": companyDescription,
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "inLanguage": "ar-SA"
  }

  // Service Schema
  const serviceSchema = type === 'service' ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageData?.title || "خدمات العزل بالرياض",
    "description": pageData?.description || "خدمات عزل فوم وحراري ومائي للأسطح والخزانات بالرياض والخرج.",
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
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
          "name": "عزل فوم اقتصادي",
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
          "name": "عزل فوم بريميوم",
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

  // Article Schema
  const articleSchema = (type === 'article' && pageData) ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "datePublished": pageData.publishedTime,
    "dateModified": pageData.modifiedTime || pageData.publishedTime,
    "author": {
      "@type": "Organization",
      "name": companyName,
      "url": baseUrl
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageData.url
    },
    "image": pageData.image ? {
      "@type": "ImageObject",
      "url": pageData.image.startsWith('http') ? pageData.image : `${baseUrl}${pageData.image}`,
      "width": 1200,
      "height": 630
    } : undefined
  } : null

  const getSchemas = () => {
    const schemas: any[] = [organizationSchema, websiteSchema]

    if (serviceSchema) {
      schemas.push(serviceSchema)
    }

    if (articleSchema) {
      schemas.push(articleSchema)
    }

    return schemas
  }

  return (
    <>
      {getSchemas().map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}
