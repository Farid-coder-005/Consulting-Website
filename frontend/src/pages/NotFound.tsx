import { useTranslation } from "react-i18next";
import StubPage from "./StubPage";

export default function NotFound() {
  const { t } = useTranslation();
  return <StubPage title="404" subtitle={t("not_found.subtitle")} />;
}
