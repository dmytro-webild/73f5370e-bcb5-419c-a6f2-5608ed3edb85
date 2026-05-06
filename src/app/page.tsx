"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "services" },
        { name: "Benefits", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Austro-Tel"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778063716281-l4ot01j8.jpg"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Austro-Tel Handyshop Traiskirchen"
      description="Ihr spezialisierter Ansprechpartner für Mobilfunk: Von professionellen Reparaturen bis hin zu individueller Beratung und Top-Hardware – wir sind für Sie da."
      buttons={[
        { text: "Jetzt anrufen", href: "tel:02252521031" },
        { text: "Standort finden", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/master-holds-new-screen-replacement-disassembled-smartphone-his-laboratory-tool-kit-with-instruments-laptop-front-him-white-table-close-view_346278-1202.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Über uns"
      description={[
        "Austro-Tel Traiskirchen ist Ihre erste Adresse für fachmännische Smartphone-Services. Seit Jahren bieten wir transparente Preise, eine ehrliche Kundenberatung und höchste technische Präzision.",        "Mit über 250 positiven Rezensionen garantieren wir Ihnen einen Service, bei dem Ihr Gerät und Ihre Zufriedenheit im Mittelpunkt stehen."
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      title="Unsere exklusiven Vorteile"
      description="Warum Kunden Austro-Tel vertrauen:"
      features={[
        {
          title: "Express-Reparatur",          description: "Professionelle Display- und Hardware-Instandsetzung – oft noch am selben Tag fertig.",          imageSrc: "http://img.b2bpic.net/free-photo/hands-with-surgical-gloves-disinfecting-smartphone_23-2148561087.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/hand-uses-tweezer-pick-up-small-crew-that-holds-battery-motherboard-repairing-broken-electronic-service_346278-1783.jpg",          buttonText: "Service anfragen"},
        {
          title: "Ehrliche Beratung",          description: "Transparente Kommunikation zu allen Reparaturkosten – ohne versteckte Überraschungen.",          imageSrc: "http://img.b2bpic.net/free-photo/blur-hospital-clinic-interior_74190-5210.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall_1203-7901.jpg",          buttonText: "Mehr erfahren"},
        {
          title: "Lange Erreichbarkeit",          description: "Wir sind montags bis samstags durchgehend für Sie da: Öffnungszeiten bis 19:30 Uhr!",          imageSrc: "http://img.b2bpic.net/free-photo/call-center-operator-assisting-users-with-installing-software_482257-117872.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/businessman-using-smartphone-computer-analize-information_1421-674.jpg",          buttonText: "Kontakt"},
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Austro-Tel in Zahlen"
      tag="Ihr lokales Service-Team"
      metrics={[
        { id: "m1", value: "4.8/5", description: "Google Sterne-Bewertung" },
        { id: "m2", value: "250+", description: "Glückliche Kundenbewertungen" },
        { id: "m3", value: "19:30", description: "Mo-Sa bis spät für Sie da" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      title="Erfahrungen"
      description="Kundenfeedback unserer Community in Traiskirchen."
      showRating={true}
      testimonials={[
        { id: "t1", name: "Max M.", handle: "@max", testimonial: "Schnellste Reparatur meines Lebens!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/bike-shop-with-shop-assistant_23-2148138705.jpg" },
        { id: "t2", name: "Julia S.", handle: "@julia", testimonial: "Sehr fairer Umgang und tolle Beratung.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-bohemian-woman_23-2149726236.jpg" },
        { id: "t3", name: "Lukas K.", handle: "@lukas", testimonial: "Kompetenz, die man merkt.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-loader-holding-house-model-uniform-front-view_176474-21361.jpg" },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      useInvertedBackground={false}
      textboxLayout="split"
      faqs={[
        { id: "f1", title: "Öffnungszeiten", content: "Besuchen Sie uns montags bis freitags von 09:00 bis 19:30 Uhr und samstags von 09:00 bis 17:00 Uhr." },
        { id: "f2", title: "Express-Service", content: "Viele Reparaturen führen wir noch am selben Tag durch." },
        { id: "f3", title: "Zubehör", content: "Wir haben eine große Auswahl an Schutzfolien, Hüllen und Zubehör lagernd." },
      ]}
      mediaAnimation="slide-up"
      title="Fragen & Antworten"
      description="Die wichtigsten Informationen auf einen Blick."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "rotated-rays-static" }}
      text="Besuchen Sie uns in der Otto Glöckel-Straße 1 in Traiskirchen. Wir freuen uns auf Ihren Besuch!"
      buttons={[
        { text: "02252 521031", href: "tel:02252521031" },
        { text: "Wegbeschreibung", href: "#" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Austro-Tel"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLX7abrKMHcdx9YbSkGfOjUjyl/uploaded-1778063716281-l4ot01j8.jpg"
      columns={[
        { title: "Kontakt", items: [{ label: "Otto Glöckel-Str 1, Traiskirchen", href: "#" }, { label: "02252 521031", href: "tel:02252521031" }] },
        { title: "Öffnungszeiten", items: [{ label: "Mo-Fr: bis 19:30, Sa: bis 17:00", href: "#" }] },
        { title: "Mehr", items: [{ label: "Datenschutz", href: "#" }, { label: "Impressum", href: "#" }] },
      ]}
      copyrightText="© 2025 Austro-Tel Handyshop"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}