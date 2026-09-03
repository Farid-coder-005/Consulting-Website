import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import StubPage from "./StubPage";
import { companyFormationSlugs } from "../content";

export default function CompanyFormation() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const label = slug ? companyFormationSlugs[slug] : undefined;
  const title = label ?? t("company_formation.title");
  const subtitle = label
    ? `${label} ${t("company_formation.coming_soon")}`
    : t("company_formation.coming_soon_default");

  return <StubPage title={title} subtitle={subtitle} />;
}
