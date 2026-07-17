import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Features from "@/components/Features";
import GoogleServicesSection from "@/components/GoogleServicesSection";
import HowItWorks from "@/components/HowItWorks";
import DataUsageSection from "@/components/DataUsageSection";
import PrivacySection from "@/components/PrivacySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <Features />
      <GoogleServicesSection />
      <HowItWorks />
      <DataUsageSection />
      <PrivacySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
