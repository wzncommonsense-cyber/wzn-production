import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Process from "../components/Process";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Werkwijze",
  description:
    "Bekijk de werkwijze van WZN Production: idee bespreken, plan maken, design, bouwen, feedback en oplevering.",
};

export default function WerkwijzePage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Werkwijze"
        title="Een helder proces van eerste idee tot oplevering."
        description="Geen vaag traject, maar duidelijke stappen zodat je weet wat er gebeurt en waar we naartoe werken."
      />
      <Process />
    </PageFrame>
  );
}
