import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Pricing from "../components/Pricing";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Prijzen en introductiekorting",
  description:
    "Bekijk de tijdelijke introductieprijzen van WZN Production voor professionele websites en custom AI/software demo's.",
};

export default function PrijzenPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Prijzen"
        title="Tijdelijke introductieprijzen voor professionele projecten."
        description="Heldere pakketten voor ondernemers, bedrijven en creators die professioneel online zichtbaar willen worden."
      />
      <Pricing />
    </PageFrame>
  );
}
