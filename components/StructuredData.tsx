'use client'

import Script from 'next/script'

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
  }
}

export default function StructuredData({ type = 'website', pageData }: StructuredDataProps) {
  const baseUrl = 'https://exzofor.com'
  
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${baseUrl}/#organization`,
    "name": "شركة أكزوموف لنقل العفش والأثاث",
    "alternateName": ["أكزوموف", "Exzo Move", "شركة نقل عفش جدة"],
    "url": baseUrl,
    "logo": `${baseUrl}/moving-service-premium.avif`,
    "description": "شركة أكزوموف المتخصصة في نقل العفش والأثاث في جدة. خبرة 8 سنوات، خدمة 24/7، ضمان شامل وتأمين على جميع المنقولات. نغطي جميع أحياء جدة بأفضل الأسعار.",
    "foundingDate": "2017",
    "telephone": "+966592425077",
    "email": "info@exzofor.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "جدة",
      "addressRegion": "منطقة مكة المكرمة",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.4858",
      "longitude": "39.1925"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "جدة",
        "addressCountry": "SA"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "21.4858",
        "longitude": "39.1925"
      },
      "geoRadius": "50000"
    },
    "slogan": "نقل عفش آمن ومضمون في جدة",
    "priceRange": "$$",
    "currenciesAccepted": "SAR",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "openingHours": "Mo-Su 00:00-23:59",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات نقل العفش والأثاث",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "نقل عفش المنازل",
            "description": "خدمة نقل عفش شاملة للمنازل والشقق في جدة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "نقل أثاث المكاتب والشركات",
            "description": "نقل احترافي لأثاث المكاتب والشركات"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "خدمات التغليف",
            "description": "تغليف احترافي للأثاث باستخدام مواد عالية الجودة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "التخزين المؤقت",
            "description": "خدمات التخزين الآمن للأثاث في مستودعات مجهزة"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "أحمد محمد"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "خدمة ممتازة جداً! نقلوا أثاثي باحترافية عالية وأمان تام. الأسعار معقولة والخدمة سريعة. أنصح الجميع بالتعامل معهم."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/exoomove/",
      "https://www.instagram.com/exoomove",
      "https://www.tiktok.com/@exoomove"
    ]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "شركة أكزوموف لنقل العفش والأثاث في جدة",
    "description": "شركة أكزوموف المتخصصة في نقل العفش والأثاث بجدة 2025. خبرة 8 سنوات، خدمة 24/7، ضمان شامل وتأمين، فك وتركيب احترافي، تغليف آمن، أسعار تنافسية.",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "inLanguage": "ar-SA",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    ]
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "خدمات نقل العفش والأثاث في جدة",
    "description": "خدمات نقل العفش والأثاث المتكاملة في جدة. نقل المنازل، نقل الشركات والمكاتب، خدمات التغليف الاحترافية، النقل السريع خلال 24 ساعة، وضمان سلامة المنقولات.",
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "areaServed": {
      "@type": "City",
      "name": "جدة",
      "addressCountry": "SA"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "العائلات والشركات في جدة"
    },
    "category": "Moving Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات نقل العفش",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "نقل عفش في جدة",
          "description": "خدمة نقل عفش متكاملة داخل جدة تشمل الفك والتركيب والتغليف",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "200",
            "priceCurrency": "SAR",
            "valueAddedTaxIncluded": true
          }
        },
        {
          "@type": "Offer",
          "name": "نقل أثاث المكاتب والشركات",
          "description": "نقل محترف لمكاتب الشركات في جدة مع الحفاظ على سير العمل",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "500",
            "priceCurrency": "SAR",
            "valueAddedTaxIncluded": true
          }
        }
      ]
    }
  }

  // Article Schema (for blog posts)
  const articleSchema = pageData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "datePublished": pageData.publishedTime,
    "dateModified": pageData.modifiedTime || pageData.publishedTime,
    "author": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageData.url
    },
    "articleSection": pageData.category || "نقل العفش",
    "inLanguage": "ar-SA",
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}/moving-service-premium.avif`,
      "width": 1200,
      "height": 630
    }
  } : null

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "كم تكلفة نقل عفش في جدة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تختلف التكلفة حسب حجم الأثاث والمسافة. تبدأ الأسعار من 200 ريال للشقة الصغيرة وصولاً إلى 1000 ريال للفيلا الكبيرة. نحن نقدم عروض أسعار مجانية ومخصصة."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون خدمة الفك والتركيب؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم خدمة الفك والتركيب الاحترافية لجميع أنواع الأثاث. فريقنا مدرب على فك وتركيب الأثاث بأمان تام."
        }
      },
      {
        "@type": "Question",
        "name": "هل أثاثي مؤمن ضد الأضرار؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، جميع خدماتنا مشمولة بتأمين ضد الأضرار. نقدم ضمان شامل على سلامة أثاثك من البداية حتى النهاية."
        }
      },
      {
        "@type": "Question",
        "name": "هل تعملون في جميع أحياء جدة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نغطي جميع أحياء جدة من الشمال إلى الجنوب ومن الشرق إلى الغرب. نقدم خدماتنا في جميع المناطق."
        }
      }
    ]
  }

  const getSchemas = () => {
    const schemas: any[] = [organizationSchema, websiteSchema, faqSchema]
    
    if (type === 'service') {
      schemas.push(serviceSchema)
    }
    
    if (type === 'article' && articleSchema) {
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