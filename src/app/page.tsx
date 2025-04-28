import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("default");

  return (
    <div className="">
      <h1>{t("title")}</h1>
    </div>
  );
}
