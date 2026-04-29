import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Pricing from "../components/Pricing";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Prijzen",
  description:
    "Bekijk de vanaf-prijzen van WZN Production voor websites, business sites, software, webapps en promotiecontent.",
};

export default function PrijzenPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Prijzen"
        title="Duidelijke pakketten met ruimte voor maatwerk."
        description="Gebruik de vanaf-prijzen als startpunt. Na een korte intake krijg je een vaste prijs op basis van functies, designniveau en gewenste oplevering."
      />
      <Pricing />
    </PageFrame>
  );
}
