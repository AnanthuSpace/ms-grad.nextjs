import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";

const HeroSection = dynamic(() => import("../components/HeroSection"));
const ContentSection = dynamic(() => import("@/components/ContentSection"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const CradShow = dynamic(() => import("@/components/CradShow"));
const StatisticsBar = dynamic(() => import("@/components/StatisticsBar"));
const GraduateShowcase = dynamic(() => import("@/components/GraduateShowcase"));
const InsightsSection = dynamic(() => import("@/components/InsightsSection"));
const CareerSection = dynamic(() => import("@/components/CareerSection"));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ContentSection />
        <StatsSection />
        <FeaturesSection />
        <StatisticsBar />
        <CradShow />
        <GraduateShowcase />
        <InsightsSection />
        <CareerSection />
      </main>
      <Footer />
    </div>
  );
}
