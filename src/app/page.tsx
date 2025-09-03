import { NavigationHeader } from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero-section';
import AnimatedTagsSection from '@/components/sections/animated-tags-section';
import StatsSection from '@/components/sections/stats-section';
import ServiceCategoriesSection from '@/components/sections/service-categories-section';
import CaseStudiesSection from '@/components/sections/case-studies-section';
import TestimonialSection from '@/components/sections/testimonial-section';
import ExpertsShowcaseSection from '@/components/sections/experts-showcase-section';
import ManagerProfilesSection from '@/components/sections/manager-profiles-section';
import ProcessTimelineSection from '@/components/sections/process-timeline-section';
import PartnersSection from '@/components/sections/partners-section';
import CtaDownloadSection from '@/components/sections/cta-download-section';
import FaqSection from '@/components/sections/faq-section';
import FooterCtaSection from '@/components/sections/footer-cta-section';
import FooterSection from '@/components/sections/footer-section';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationHeader />
      <div className="pt-20">
        <HeroSection />
        <AnimatedTagsSection />
        <div className="bg-black">
          <StatsSection />
        </div>
        <ServiceCategoriesSection />
        <CaseStudiesSection />
        <TestimonialSection />
        <ExpertsShowcaseSection />
        <ManagerProfilesSection />
        <ProcessTimelineSection />
        <PartnersSection />
        <CtaDownloadSection />
        <FaqSection />
        <FooterCtaSection />
        <FooterSection />
      </div>
    </main>
  );
}