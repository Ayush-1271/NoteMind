import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstallTabs } from "@/components/InstallTabs";
import { TerminalDemo } from "@/components/TerminalDemo";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { PrivacyFAQ } from "@/components/PrivacyFAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full px-6 md:px-12 pb-12">
        <Hero />
        <InstallTabs />
        <TerminalDemo />

        <Features />
        <Stats />
        <PrivacyFAQ />
        <Footer />
      </main>
    </>
  );
}
