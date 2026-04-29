import type { Metadata } from "next";
import Contact from "../components/Contact";
import PageFrame from "../components/PageFrame";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met WZN Production via Instagram, TikTok of mail voor websites, software, AI tools en promotiecontent.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Contact"
        title="Klaar om iets gaafs te bouwen?"
        description="Stuur mij een bericht met jouw idee, project of campagne. Dan kijken we samen wat de beste aanpak is."
      />
      <Contact />
    </PageFrame>
  );
}
