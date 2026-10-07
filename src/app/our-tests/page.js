import TestList from '@/components/tests/TestList';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/ui/CTABanner';

export const metadata = {
  title: 'Our Tests | Diagnostic Services',
  description: 'Explore the wide range of diagnostic tests available at BRDC, including Pathology, Radiology, Cardiology, Neurology, and more.',
};

export default function OurTestsPage() {
  return (
    <div className="bg-white">
      <PageHero
        crumb="Our Tests"
        title="Our"
        highlight="Diagnostic Tests"
        subtitle="Comprehensive, accurate, and state-of-the-art diagnostic services to support your health and well-being."
      />

      <div className="bg-gradient-to-b from-brdc-offwhite via-white to-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <TestList />
        </div>
      </div>

      <CTABanner title="Begin Your Medical Journey with BRDC" />
    </div>
  );
}
