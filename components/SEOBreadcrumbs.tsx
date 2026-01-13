'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

interface SEOBreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function SEOBreadcrumbs({ items, className = '' }: SEOBreadcrumbsProps) {
  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href === '#' ? undefined : `https://elazzl.com${item.href}`,
    })),
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Visual Breadcrumbs */}
      <nav
        className={`flex items-center space-x-1 space-x-reverse text-sm text-gray-600 mb-6 ${className}`}
        aria-label="مسار التنقل"
      >
        <ol className="flex items-center space-x-1 space-x-reverse">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronLeft className="w-4 h-4 mx-2 text-gray-400 rotate-180" />
              )}
              {item.current ? (
                <span
                  className="font-medium text-blue-600"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}