import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import {
  NarrativeHero,
  ContentPillars,
  DeepExplanation,
  KnowledgeBlocks,
  ProblemSolution,
  ProcessWithContext,
  UseCases,
  ComparisonContent,
  ServiceDetailsTables,
  ExpertInsights,
  ExtendedFAQ,
  TrustAuthority,
  SoftCTA,
  VisualLongForm,
  SEOTopicCluster,
  VisualProof
} from "@/components/MegaHomepageSections";

import {
  TestimonialsCarousel,
  AreasCovered
} from "@/components/AdvancedSections";
import { Neighborhoods } from "@/components/Neighborhoods";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* 1. Narrative Hero Section - قصصي */}
      <NarrativeHero />

      {/* 2. Content Pillars - محاور المحتوى الرئيسية */}
      <ContentPillars />

      {/* 3. Deep Explanation Split - شرح معمق */}
      <DeepExplanation />

      {/* 4. Knowledge Blocks - كتل معرفية قابلة للتوسيع */}
      <KnowledgeBlocks />

      {/* 5. Visual Long-Form - مقال بصري شامل */}
      <VisualLongForm />

      {/* 6. Problem → Solution - مشاكل وحلول */}
      <ProblemSolution />

      {/* 7. Process With Context - خطوات العمل المفصلة */}
      <ProcessWithContext />

      {/* 8. Use Cases - حالات استخدام واقعية */}
      <UseCases />

      {/* 9. Visual Proof - معرض الأعمال */}
      <VisualProof />

      {/* 10. Comparison Content - مقارنة تحليلية */}
      <ComparisonContent />

      {/* 10.5. Service Details Tables - جداول تفصيلية للخدمات */}
      <ServiceDetailsTables />

      {/* 11. Expert Insights - نصائح الخبراء */}
      <ExpertInsights />

      {/* 12. SEO Topic Cluster - سحابة كلمات مفتاحية */}
      <SEOTopicCluster />

      {/* 13. Testimonials - آراء العملاء */}
      <TestimonialsCarousel
        title="آراء عملائنا"
        subtitle="ماذا يقولون عنا"
        testimonials={[
          { name: 'أحمد السالم', location: 'حي الملقا، الرياض', text: 'عزلوا سطح الفيلا بالفوم وفاتورة الكهرباء انخفضت 45%. شغل ممتاز وفريق محترف. أنصح بهم بقوة.', rating: 5 },
          { name: 'محمد العتيبي', location: 'حي الياسمين، الرياض', text: 'تعاملت معهم في 3 مشاريع عزل. دائماً ملتزمين بالمواعيد والجودة عالية. ضمان 10 سنوات حقيقي.', rating: 5 },
          { name: 'عبدالله الغامدي', location: 'الخرج', text: 'كشفوا تسرب المياه وعالجوه بسرعة. خدمة سريعة وأسعار معقولة. شكراً لكم.', rating: 5 },
          { name: 'سعود المطيري', location: 'حي النرجس، الرياض', text: 'أفضل شركة عزل تعاملت معها. الفريق محترف والعمل نظيف. ننصح بهم للجميع.', rating: 5 },
        ]}
      />

      {/* 11. Extended FAQ - أسئلة شائعة موسعة */}
      <ExtendedFAQ />

      {/* 12. Trust & Authority - الثقة والمصداقية */}
      <TrustAuthority />

      {/* 13. Areas Covered - أحياء الرياض */}
      <Neighborhoods />

      {/* 14. Contact Form - نموذج التواصل */}
      <Contact />

      {/* 15. Soft CTA - دعوة ناعمة للتواصل */}
      <SoftCTA />

      <Footer />
    </main>
  );
}
