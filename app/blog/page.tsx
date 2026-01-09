import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog-data'
import { Search, Calendar, Clock, ChevronLeft, Tag, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'المدونة | شركة أوائل العزل',
  description: 'اكتشف أحدث المقالات والنصائح الاحترافية حول عزل الفوم وعزل الأسطح في الرياض والخرج مع شركة أوائل العزل.',
  keywords: [
    'عزل فوم بالرياض', 'عزل اسطح بالرياض', 'عزل فوم بالخرج', 'عزل اسطح بالخرج',
    'شركة عزل فوم', 'عزل مائي وحراري', 'شركة أوائل العزل'
  ],
  openGraph: {
    title: 'المدونة | شركة أوائل العزل',
    description: 'اكتشف أحدث المقالات والنصائح الاحترافية حول عزل الفوم وعزل الأسطح في الرياض والخرج مع شركة أوائل العزل.',
    type: 'website',
    locale: 'ar_SA',
  },
}

const blogPosts = getAllBlogPosts()
const categories = Array.from(new Set(blogPosts.map(post => post.category)))

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            المدونة ومركز المعرفة
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            نشارككم خبراتنا في عزل الفوم وحلول حماية الأسطح. مقالات حصرية، نصائح عملية، وأحدث تقنيات العزل المائي والحراري.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col md:flex-row group"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4 space-x-reverse">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 ml-1" />
                      <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 ml-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    أكمل القراءة
                    <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 border-gray-100">بحث</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في مقالات العزل..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 border-gray-100">التصنيفات</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <Link href="#" className="flex items-center justify-between group">
                      <div className="flex items-center text-gray-600 group-hover:text-blue-600 transition-colors">
                        <Tag className="w-4 h-4 ml-2 opacity-70" />
                        <span>{category}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        {blogPosts.filter(p => p.category === category).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500 opacity-10 rounded-bl-full"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">النشرة البريدية</h3>
                <p className="text-gray-400 mb-6 text-sm">اشترك للحصول على آخر نصائح العزل والعروض الحصرية مباشرة في بريدك.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="بريدك الإلكتروني"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-gray-500"
                  />
                  <button className="w-full bg-amber-500 text-slate-900 font-bold py-3 rounded-xl hover:bg-amber-400 transition-colors">
                    اشتراك الآن
                  </button>
                </form>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}