import LeftContentBlock from "@/components/LeftContentBlock/LeftContentBlock";
import HeroSection from "@/components/HeroSection/HeroSection";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import CenteredContentBlock from "@/components/CenteredContentBlock/CenteredContentBlock";

const aboutHeroContent = {
  eyebrow: "Our story",
  headlineLine1: "The resource we wished",
  headlineAccent: "existed.",
  subtext: "Built by and for families navigating their own path to parenthood.",
  image: {
    src: "/images/heros/handsFeetFamily.jpg",
    alt: "photo",
  },
  background: "charcoal",
  align: "center",
};

const ourStoryContent = {
  eyebrow: "Our story",
  headline: "Why we built this.",
  paragraphs: [
    "Family building is hard enough without having to navigate confusing, biased, or incomplete information. For too many families in Missouri and Illinois, the path to parenthood is blocked not by a lack of options — but by a lack of clear, honest information.",
    "We built this resource to be the guide we wished existed — neutral, honest, and free. Whether you're exploring IVF, considering adoption, looking into fostering, or navigating surrogacy, you deserve clear information about what your options actually look like.",
    "We also run a quarterly lottery-based micro-grant program paid directly to licensed service providers. We serve all family structures without regard to marital status, sexual orientation, gender identity, religion, or race.",
  ],
  background: "cream",
};

const nonProfitStatus = {
  eyebrow: "Transparency Matters",
  headline: "Nonprofit status update.",
  paragraphs: [
    "Midwest Family Building Resource is in the process of establishing 501(c)(3) nonprofit status. Donations are not currently tax-deductible, and we disclose this on every fundraising page.",
    "All grant funds during our pilot round are disbursed directly to licensed family-building service providers on behalf of selected families — never as cash to individuals.",
  ],
  background: "charcoal",
};

const supportContent = {
  eyebrow: "Ready to help",
  headline: "Support the mission.",
  paragraphs: [
    "Help us keep resources free, expand to more states, and fund more families.",
  ],
  buttons: [
    { label: "Donate to grant fund", href: "/donate", variant: "primary" },
    { label: "Explore resources", href: "/resources", variant: "secondary" },
  ],
  background: "cream",
};

export default function AboutPage() {
  return (
    <main>
      <HeroSection {...aboutHeroContent} />
      <LeftContentBlock {...ourStoryContent} />
      <ValuesSection />
      <LeftContentBlock {...nonProfitStatus} />
      <CenteredContentBlock {...supportContent} />
    </main>
  );
}
