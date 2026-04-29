import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Pricing from "../components/Pricing";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Prijzen",
  description:
    "Bekijk de vanaf-prijzen van WZN Production: Starter Website vanaf 299 euro, Business Website vanaf 899 euro, Software/Webapp vanaf 1250 euro en Promotie Content vanaf 149 euro.",
};

export default function PrijzenPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Prijzen"
        title="Duidelijke pakketten met ruimte voor maatwerk."
        description="Alle prijzen zijn vanaf-prijzen. Na een korte intake krijg je een vaste prijs op basis van functies, designniveau, aantal pagina's en gewenste oplevering."
      />
      <Pricing />
    </PageFrame>
  );
}
