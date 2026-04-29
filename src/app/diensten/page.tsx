import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Services from "../components/Services";
import SubPageHero from "../components/SubPageHero";
import WhyWzn from "../components/WhyWzn";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bekijk de diensten van WZN Production: websites, software, AI tools, promotiecontent, flyers en contentstrategie.",
};

export default function DienstenPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Diensten"
        title="Software, websites, AI tools en promotie vanuit een sterke lijn."
        description="Hier vind je de volledige uitleg van wat WZN Production kan leveren voor bedrijven, zzp'ers en creators."
      />
      <Services />
      <WhyWzn />
    </PageFrame>
  );
}
