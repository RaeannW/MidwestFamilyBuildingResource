import LeftContentBlock from "@/components/LeftContentBlock/LeftContentBlock";
import HeroSection from "@/components/HeroSection/HeroSection";

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

export default function AboutPage() {
  return (
    <main>
      <HeroSection {...aboutHeroContent} />
      <LeftContentBlock {...ourStoryContent} />
    </main>
  );
}
