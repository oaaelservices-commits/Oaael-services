import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost, getAllBlogPosts, getRelatedPosts } from '@/lib/blog-data'
import { Calendar, Clock, User, ArrowRight, Facebook, Twitter, Linkedin, MessageCircle, Phone, CheckCircle } from 'lucide-react'
import StructuredData from '@/components/StructuredData'

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'المقال غير موجود',
      description: 'المقال المطلوب غير موجود'
    }
  }

  return {
    title: `${post.title} | مدونة العزل | شركة عزل أسطح بالرياض | 0551777962`,
    description: post.excerpt,
   keywords: [
    // Blog-specific Keywords
    'مدونة عزل الفوم', 'نصائح عزل الأسطح', 'مقالات العزل المائي', 'دليل العزل عزل الفوم',
    'مشاكل تسربات المياه', 'حلول ارتفاع فاتورة الكهرباء',

    // How-to Keywords
    'كيفية عزل السطح', 'طريقة عزل الفوم', 'خطوات العزل المائي',
    'أفضل مواد العزل', 'اختيار شركة العزل المناسبة',

    // Problem-solving Keywords
    'علاج تشققات السطح', 'منع تسرب مياه الأمطار', 'حماية المنزل من الحرارة',
    'أضرار الرطوبة على المباني', 'صيانة عزل الأسطح',

    // Comparison Keywords
    'مقارنة أنواع العزل', 'الفرق بين العزل المائي والحراري', 'سعر عزل الفوم مقابل العزل التقليدي',

    // Seasonal Keywords
    'عزل الأسطح قبل الشتاء', 'تجهيز المنزل للصيف', 'أهمية العزل في موسم الأمطار',

    // General Keywords
    'عزل فوم بالرياض', 'شركة عزل بالخرج', 'أفضل شركات العزل'
  ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'ar_SA',
      images: [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      }],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, 3)

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <StructuredData
        type="article"
        pageData={{
          title: post.title,
          description: post.excerpt,
          url: `https://elazzl.sa/blog/${post.slug}`,
          publishedTime: post.date,
          author: post.author || 'شركة عزل أسطح بالرياض',
          category: post.category,
          image: post.image
        }}
      />

      {/* Immersive Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-slate-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

        <div className="absolute inset-x-0 bottom-0 pb-16 pt-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block shadow-lg">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm md:text-base">
                <div className="flex items-center">
                  <User className="w-5 h-5 ml-2 text-amber-500" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 ml-2 text-amber-500" />
                  <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 ml-2 text-amber-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {/* Main Article Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden">

              {/* Breadcrumbs */}
              <nav className="mb-10 text-sm text-gray-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2">
                <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">المدونة</Link>
                <span>/</span>
                <span className="text-gray-900 font-medium truncate">{post.title}</span>
              </nav>

              {/* Excerpt */}
              <div className="bg-blue-50 border-r-4 border-blue-600 p-6 rounded-lg mb-10 italic text-lg text-gray-700 leading-relaxed">
                {post.excerpt}
              </div>

              {/* Content */}
              <article className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-loose prose-a:text-blue-600 prose-img:rounded-2xl max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-bold text-slate-800">شارك المقال:</span>
                <div className="flex gap-4">
                  <button className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link key={tag} href="#" className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-r-4 border-amber-500 pr-4">مقالات قد تهمك</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link href={`/blog/${related.slug}`} key={related.slug} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={related.image} alt={related.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{related.title}</h4>
                      <p className="text-sm text-gray-500 flex items-center justify-between">
                        <span>{new Date(related.date).toLocaleDateString('ar-SA')}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform" />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">

            {/* CTA Widget */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl sticky top-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500 rounded-tr-full opacity-20"></div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">هل تبحث عن شركة عزل موثوقة؟</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  فريقنا المحترف جاهز لمساعدتك في عزل منزلك بأمان وكفاءة. احصل على استشارة مجانية وعرض سعر الآن.
                </p>

                <div className="space-y-4">
                  <Link href="/contact" className="block w-full bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
                    اطلب عرض سعر الآن
                  </Link>
                  <a href="tel:0551777962" className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 rounded-xl hover:bg-white/20 transition-colors">
                    اتصل بنا مباشرة
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex justify-center flex-wrap gap-2 text-xs text-gray-400">
                    <span className="flex items-center"><CheckCircle className="w-3 h-3 ml-1 text-green-500" /> ضمان شامل</span>
                    <span className="flex items-center"><CheckCircle className="w-3 h-3 ml-1 text-green-500" /> عمالة محترفة</span>
                    <span className="flex items-center"><CheckCircle className="w-3 h-3 ml-1 text-green-500" /> سرعة في التنفيذ</span>
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  )
}
