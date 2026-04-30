import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Pricing from "../components/Pricing";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Prijzen",
  description:
    "Bekijk de interactieve pakketten van WZN Production: Starter Website, Business Website, Software/Webapp en Promotie Content met duidelijke oplevering en vanaf-prijzen.",
};

export default function PrijzenPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Prijzen"
        title="High-end pakketten voor websites, software en promotie."
        description="Bekijk wat je krijgt, voor wie elk pakket geschikt is en welke oplevering je kunt verwachten."
      />
      <Pricing />
    </PageFrame>
  );
}
