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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Austro-Tel"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Ihr zuverlässiger Partner für Mobilfunk in Traiskirchen"
      description="Ob schnelle Display-Reparatur, technische Hilfe oder neue Smartphones – Austro-Tel steht für fachliche Kompetenz, faire Preise und persönlichen Service."
      buttons={[
        {
          text: "Jetzt anrufen",
          href: "tel:02252521031",
        },
        {
          text: "Standort finden",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/master-holds-new-screen-replacement-disassembled-smartphone-his-laboratory-tool-kit-with-instruments-laptop-front-him-white-table-close-view_346278-1202.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Warum Austro-Tel?"
      description={[
        "Mit über 250 positiven Rezensionen sind wir in Traiskirchen die erste Wahl für Ihre Anliegen rund ums Smartphone.",
        "Wir bieten nicht nur schnelle Reparaturen, sondern eine ehrliche und transparente Beratung. Unser Fokus liegt auf nachhaltigem Service, der überzeugt.",
      ]}
      buttons={[
        {
          text: "Unsere Leistungen",
          href: "#services",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Handy-Reparaturen",
          description: "Professionelle Display- und Hardware-Instandsetzung in Rekordzeit.",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-with-surgical-gloves-disinfecting-smartphone_23-2148561087.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/hand-uses-tweezer-pick-up-small-crew-that-holds-battery-motherboard-repairing-broken-electronic-service_346278-1783.jpg",
          buttonText: "Mehr erfahren",
        },
        {
          title: "Große Auswahl",
          description: "Aktuelle Smartphones und passendes Zubehör direkt vor Ort erhältlich.",
          imageSrc: "http://img.b2bpic.net/free-photo/blur-hospital-clinic-interior_74190-5210.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-shopping-mall_1203-7901.jpg",
          buttonText: "Angebote ansehen",
        },
        {
          title: "Experten-Beratung",
          description: "Persönliche Unterstützung bei technischen Problemen und Tarifen.",
          imageSrc: "http://img.b2bpic.net/free-photo/call-center-operator-assisting-users-with-installing-software_482257-117872.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/businessman-using-smartphone-computer-analize-information_1421-674.jpg",
          buttonText: "Kontakt aufnehmen",
        },
      ]}
      title="Unser Serviceangebot"
      description="Wir verbinden technische Perfektion mit persönlicher Beratung für ein sorgenfreies Nutzererlebnis."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Erfolge, die Vertrauen schaffen"
      tag="Unser Qualitätsversprechen"
      metrics={[
        {
          id: "m1",
          value: "4.8",
          description: "Sterne Bewertung bei Google",
        },
        {
          id: "m2",
          value: "250+",
          description: "Zufriedene Rezensionen",
        },
        {
          id: "m3",
          value: "19:30",
          description: "Täglich für Sie da",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Max M.",
          handle: "@max",
          testimonial: "Schnelle Reparatur und super freundliche Beratung. Mein Handy läuft wieder einwandfrei!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/bike-shop-with-shop-assistant_23-2148138705.jpg",
        },
        {
          id: "t2",
          name: "Julia S.",
          handle: "@julia",
          testimonial: "Sehr fairer Preis und transparente Abwicklung. Kann ich nur weiterempfehlen.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-bohemian-woman_23-2149726236.jpg",
        },
        {
          id: "t3",
          name: "Lukas K.",
          handle: "@lukas",
          testimonial: "Top Service in Traiskirchen. Kompetent und zuverlässig wie immer.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-loader-holding-house-model-uniform-front-view_176474-21361.jpg",
        },
        {
          id: "t4",
          name: "Maria B.",
          handle: "@maria",
          testimonial: "Habe mein neues iPhone hier gekauft, tolle Auswahl und Beratung.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop-s_1258-164204.jpg",
        },
        {
          id: "t5",
          name: "Stefan R.",
          handle: "@stefan",
          testimonial: "Problem wurde sofort gelöst. Tolles Team vor Ort!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-coffee-cup_23-2149412558.jpg",
        },
      ]}
      showRating={true}
      title="Kundenstimmen"
      description="Was unsere Kunden über den Austro-Tel Handyshop sagen."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Bieten Sie auch Express-Reparaturen an?",
          content: "Ja, wir bemühen uns, die meisten Display-Schäden innerhalb kurzer Zeit noch am selben Tag zu beheben.",
        },
        {
          id: "f2",
          title: "Wie lange sind Ihre Öffnungszeiten?",
          content: "Wir sind von Montag bis Samstag bis 19:30 Uhr persönlich für Sie in Traiskirchen erreichbar.",
        },
        {
          id: "f3",
          title: "Verkaufen Sie auch Zubehör für ältere Handymodelle?",
          content: "Unser Lager umfasst eine große Auswahl, gerne schauen wir für Sie nach, ob das passende Teil lagernd ist.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/bike-shop-with-shop-assistant_23-2148138769.jpg"
      mediaAnimation="slide-up"
      title="Häufige Fragen"
      description="Alles, was Sie über unsere Services bei Austro-Tel wissen müssen."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "rotated-rays-static",
      }}
      text="Besuchen Sie uns direkt in der Otto Glöckel-Straße 1. Wir freuen uns auf Ihren Besuch!"
      buttons={[
        {
          text: "02252 521031",
          href: "tel:02252521031",
        },
        {
          text: "Wegbeschreibung",
          href: "https://maps.google.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Austro-Tel"
      columns={[
        {
          title: "Kontakt",
          items: [
            {
              label: "Otto Glöckel-Str 1, Traiskirchen",
              href: "#",
            },
            {
              label: "02252 521031",
              href: "tel:02252521031",
            },
          ],
        },
        {
          title: "Öffnungszeiten",
          items: [
            {
              label: "Bis 19:30 Uhr geöffnet",
              href: "#",
            },
          ],
        },
        {
          title: "Mehr",
          items: [
            {
              label: "Datenschutz",
              href: "#",
            },
            {
              label: "Impressum",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Austro-Tel Handyshop"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
