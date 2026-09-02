import { PageTransition } from "../components/motion";
import Hero from "../components/Hero";
import HomeStatsIntro from "../components/home/HomeStatsIntro";
import HomeProcessCards from "../components/home/HomeProcessCards";
import HomeOffices from "../components/home/HomeOffices";
import HomeReviews from "../components/home/HomeReviews";
import HomePartners from "../components/home/HomePartners";
import Contact from "../components/Contact";
import { hakkimizdaReferences } from "../content";
import { CtaBand } from "../components/inner";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <Hero />

      {/* 1. Stats & Intro */}
      <HomeStatsIntro />

      {/* 2. 5-Step Process Blue Cards */}
      <HomeProcessCards />

      {/* 3. Office Cards */}
      <HomeOffices />

      {/* 4. Google Reviews */}
      <HomeReviews />

      {/* 5. Partner Logos Grid */}
      <HomePartners />

      {/* Deneyimlerimiz & Contact Form */}
      <Contact experiences logos={hakkimizdaReferences} />

      {/* Pre-Footer CTA Banner */}
      <CtaBand />
    </PageTransition>
  );
}
