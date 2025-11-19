import AboutSectionOne from "@/components/About/AboutSectionOne";
import WorkingWithSection from "@/components/WorkingWith";
import HeroBanner from "@/components/HeroBanner";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { KeyHighlightsSlider } from "@/components/KeyHighlightsSlider";
import CapabilitiesShowcase from "@/components/CapabilitiesShowcase";

export const metadata: Metadata = {
  title: "Healthcare Evolution, Inc. - Medical Device Development Partner",
  description: "HCE partners with innovative medical device companies to accelerate development, de-risk regulatory pathways, and enable successful global launches.",
};

export default function Home() {
  return (
    <>
      <HeroBanner />
      {/* <Hero /> */}
      <KeyHighlightsSlider />
      <AboutSectionOne />
      <CapabilitiesShowcase />
      {/* <CaseStudy /> */}

      {/* <WorkingWithSection /> */}
      {/* <Features /> */}
    </>
  );
}
