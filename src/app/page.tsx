import HeroCarousel from "@/components/home/HeroCarousel";
import FactsSection from "@/components/home/FactsSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TeamSection from "@/components/home/TeamSection";
import AppointmentSection from "@/components/home/AppointmentSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FactsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <AppointmentSection />
      <TestimonialsSection />
    </>
  );
}
