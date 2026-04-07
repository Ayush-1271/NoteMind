import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InstallTerminal } from "@/components/InstallTerminal";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LiveExecutionDemo } from "@/components/LiveExecutionDemo";
import { ComparisonSection } from "@/components/ComparisonSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <div className="pt-16">
        <HeroSection />
        <InstallTerminal />
        <ArchitectureSection />
        <FeaturesSection />
        <LiveExecutionDemo />
        <ComparisonSection />
      </div>

      <Footer />
    </main>
  );
}
