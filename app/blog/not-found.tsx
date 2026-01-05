import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            المقال غير موجود
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            عذراً، المقال الذي تبحث عنه غير موجود أو تم نقله إلى صفحة أخرى.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            العودة إلى المدونة
          </Link>
          
          <div className="block">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
