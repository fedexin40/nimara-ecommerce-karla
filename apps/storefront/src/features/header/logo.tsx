import Image from "next/image";
import { useTranslations } from "next-intl";

import { LocalizedLink } from "@nimara/i18n/routing";

import logo from "@/assets/logo_chico_blanco.png";
import logo_negro from "@/assets/logo_chico_negro.png";
import { paths } from "@/foundation/routing/paths";

export const Logo = () => {
  const t = useTranslations("common");

  return (
    <LocalizedLink
      href={paths.home.asPath()}
      title={t("go-to-homepage")}
      aria-label={t("logo")}
    >
      <span className="hidden dark:block">
        <Image
          src={logo}
          alt="Logo"
          width={160}
          height={40}
          loading="eager"
        />
      </span>
      <span className="dark:hidden">
        <Image
          src={logo_negro}
          alt="Logo"
          width={160}
          height={40}
          loading="eager"
        />
      </span>
    </LocalizedLink>
  );
};

Logo.displayName = "Logo";
