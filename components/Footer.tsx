import { Facebook, Instagram, Youtube, Phone, MapPin, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

// Custom Icons
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.003 1.9c-2.86.02-5.11 1.78-5.35 4.18-.04.42-.23 1.22-1.15 1.18-.95-.04-1.35.79-1.25 1.25.07.31.29.56.54.75.14.11.29.21.37.36.03.05.05.12.05.18 0 .44-.43.76-.84 1.08-.43.33-.89.69-.89 1.19 0 .41.34.77.67.97.23.14.48.24.71.39.23.15.35.33.35.6s-.19.64-.52.93c-.47.41-1.14.99-1.14 1.79 0 .97 1.07 1.78 2.05 1.94.31.05.62.08.93.07.24.23.51.46.79.67 1.18.91 2.89 1.54 4.67 1.54 1.75 0 3.44-.61 4.61-1.5-.04-.03.21-.19.78-.65.31.01.62-.02.93-.07.98-.16 2.05-.97 2.05-1.94 0-.8-.67-1.38-1.14-1.79-.32-.28-.52-.66-.52-.93 0-.27.12-.45.35-.6.23-.15.48-.25.71-.39.33-.2.67-.56.67-.97 0-.5-.46-.86-.89-1.19-.41-.32-.84-.63-.84-1.08 0-.06.02-.13.05-.18.08-.15.23-.25.37-.36.25-.19.46-.44.53-.75.1-.46-.3-.1.29-1.25 1.25-.92.04-1.11-.76-1.15-1.18-.24-2.4-2.49-4.16-5.35-4.18z" />
  </svg>
)

const Footer = () => {
  const socialMedia = [
    { name: "Instagram", href: "https://www.instagram.com/awazelalsafrrat/?hl=ar", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/Awazelalsafrat/", icon: Facebook },
    { name: "YouTube", href: "https://www.youtube.com/@awazel343", icon: Youtube },
    { name: "TikTok", href: "https://www.tiktok.com/@awazelalsafrrat", icon: TikTokIcon },
    { name: "Snapchat", href: "https://www.snapchat.com/@awazelalsafrrat?locale=ar", icon: SnapchatIcon },
  ]

  const partnerLinks = [
    { name: "شركة عزل فوم بالرياض", href: "https://awazel-alsafrrat.com.sa/" },
    { name: "شركة عزل اسطح بالرياض", href: "https://awazel-alsafrrat.sa/" },
  ]

  const serviceAreas = {
    main: ["الرياض", "الخرج", "شمال الرياض", "الدرعية", "الدوادمي", "المجمعة"],
    secondary: ["القويعية", "وادي الدواسر", "الأفلاج", "الزلفي", "شقراء", "حريملاء"],
    tertiary: ["المزاحمية", "رماح", "ثادق", "حوطة بني تميم", "عفيف", "السليل", "الغاط", "الحريق", "ضرماء"]
  }

  return (
    <footer className="bg-[#0f172a] text-white overflow-hidden">
      {/* Comprehensive Coverage Section */}
      <div className="bg-[#0B1120] py-16 border-b border-white/5 relative">
        <div className="absolute top-0 right-0 w-1 h-full bg-brand-orange-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-right">
            <h2 className="text-2xl font-bold text-white mb-4 border-r-4 border-brand-orange-500 pr-4">تغطية شاملة</h2>
            <p className="text-gray-400 max-w-3xl leading-relaxed text-lg">
              نقدم خدمات عزل اسطح بالرياض وعزل اسطح بالخرج وجميع محافظات ومدن منطقة الرياض بما فيها شمال الرياض من خلال أفضل شركات عزل خزانات شمال الرياض.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-8 mb-8 text-sm">
            {[...serviceAreas.main, ...serviceAreas.secondary].map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 group cursor-default">
                <ChevronLeft className="w-4 h-4 text-brand-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{area}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start border-t border-white/5 pt-6 text-sm">
            {serviceAreas.tertiary.map((area, idx) => (
              <span key={idx} className="text-gray-500 hover:text-gray-300 transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">
                شركة <span className="text-brand-orange-500">عزل فوم بالرياض و الخرج</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-xs">
              الشركة الرائدة في مجال العزل المائي والحراري بالرياض. نقدم حلولاً متكاملة لحماية منزلك بأحدث التقنيات وأفضل المواد مع ضمان شامل.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-brand-orange-500" />
                </div>
                <a href="tel:0551777962" className="group-hover:text-white transition-colors" dir="ltr">0551777962</a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-orange-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-brand-orange-500" />
                </div>
                <span className="group-hover:text-white transition-colors">الرياض - المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              خدماتنا
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/foam-insulation" className="text-gray-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>عزل فوم بالرياض</Link></li>
              <li><Link href="/services/roof-insulation" className="text-gray-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>عزل شينكو بالرياض</Link></li>
              <li><Link href="/services/waterproof-insulation" className="text-gray-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>عزل مائي بالرياض</Link></li>
              <li><Link href="/services/thermal-insulation" className="text-gray-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>عزل حراري بالرياض</Link></li>
              <li><Link href="/services/leak-detection" className="text-gray-400 hover:text-brand-orange-500 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>عزل أسطح بالرياض</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">روابط هامة</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">من نحن</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">المدونة</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">شركاء النجاح</h3>
            <div className="space-y-4">
              {partnerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-brand-orange-500/30 transition-all group"
                >
                  <span className="block text-gray-300 font-medium group-hover:text-brand-orange-400 transition-colors mb-1">{link.name}</span>
                  <span className="block text-xs text-gray-500 group-hover:text-gray-400 transition-colors truncate" dir="ltr">{link.href.replace('https://', '')}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لشركة عزل فوم بالرياض و الخرج</p>
            <p className="mt-1">
              تصميم وتطوير{" "}
              <a
                href="https://wa.me/201145607071"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange-500 hover:text-brand-orange-400 transition-colors font-medium"
              >
                Ahmed Adham
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {socialMedia.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange-500 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
