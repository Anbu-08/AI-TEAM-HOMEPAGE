import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import PrivacySection from "@/components/PrivacySection";
import PermissionsSection from "@/components/PermissionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PrivacySection />
      <PermissionsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
