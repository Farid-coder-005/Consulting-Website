import { useParams } from "react-router-dom";
import StubPage from "./StubPage";
import { companyFormationSlugs } from "../content";

export default function CompanyFormation() {
  const { slug } = useParams();
  const label = slug ? companyFormationSlugs[slug] : undefined;
  const title = label ?? "Şirket Kuruluşu";
  const subtitle = label
    ? `${label} hizmetleri yakında detaylandırılacaktır.`
    : "Uluslararası şirket kuruluşu hizmetlerimiz yakında yayına alınacaktır.";

  return <StubPage title={title} subtitle={subtitle} />;
}
