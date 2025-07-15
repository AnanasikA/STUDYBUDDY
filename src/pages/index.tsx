import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StepsSection from '@/components/StepsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatisticsSection from '@/components/StatisticsSection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>StudyBuddy - Twój partner w nauce</title>
      </Head>
      <Header />
      <Hero />
      <StepsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <StatisticsSection />
      <GetStartedSection />
      <Footer />
    </>
  );
}
