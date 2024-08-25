import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/HerorSection";
import ContentSection from "@/components/content-section/ContentSection";
import FooterSection from "@/components/footer-section/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </main>
  );
}
