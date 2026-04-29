import type { Metadata } from "next";
import PageFrame from "../components/PageFrame";
import Portfolio from "../components/Portfolio";
import SubPageHero from "../components/SubPageHero";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bekijk portfolio en voorbeelden van WZN Production: flyers, banners, AI concepts, demo apps, webapps en video visuals.",
};

export default function PortfolioPage() {
  return (
    <PageFrame>
      <SubPageHero
        eyebrow="Portfolio"
        title="Projecten, visuals en concepten met WZN-uitstraling."
        description="Een overzicht van promotiebeelden, softwareconcepten, AI branding, webapps en visuele productie."
      />
      <Portfolio />
    </PageFrame>
  );
}
