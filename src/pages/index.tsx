import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer"; 

const HeroSection = dynamic(() => import("../components/HeroSection"));
const ContentSection = dynamic(() => import("@/components/ContentSection"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection"));
const InsightsSection = dynamic(() => import("@/components/InsightsSection"));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ContentSection />
        <StatsSection />
        <FeaturesSection />
        <InsightsSection />
      </main>
      <Footer />
    </div>
  );
}
