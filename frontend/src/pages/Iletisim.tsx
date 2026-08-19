import { PageTransition } from "../components/motion";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import OfficesSection from "../components/contact/OfficesSection";
import ContactCtaBanner from "../components/contact/ContactCtaBanner";

export default function Iletisim() {
  return (
    <PageTransition>
      <ContactHero />
      <ContactFormSection />
      <OfficesSection />
      <ContactCtaBanner />
    </PageTransition>
  );
}
