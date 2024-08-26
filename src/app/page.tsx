import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/HerorSection";
import ContentSection from "@/components/content-section/ContentSection";
import FooterSection from "@/components/footer-section/FooterSection";
import Modal from "@/components/modal/Modal";
import { Suspense } from "react";

export type SearchParamPropsKey = 'modal' | 'q0' | 'q1' | 'q2';

export type SearchParamProps = {
  searchParams: Record<SearchParamPropsKey, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const isOpen = searchParams?.modal
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <FooterSection />

      {isOpen && <Modal searchParams={searchParams} />}
      {/* {isOpen && <Suspense fallback={<div>Loading...</div>}><Modal searchParams={searchParams} /></Suspense>} */}
    </main>
  );
}
