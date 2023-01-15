import type { DocsThemeConfig } from "nextra-theme-docs";
import { Head } from "src/components/theme/head";
import { Logo } from "src/components/theme/logo";

const themeConfig: DocsThemeConfig = {
  darkMode: true,
  primaryHue: 90,
  useNextSeoProps: () => ({ titleTemplate: "%s - Vigen" }),
  project: {
    link: "https://github.com/47vigen/vigen",
  },
  docsRepositoryBase: "https://github.com/47vigen/vigen/blob/master/pages",

  // components
  logo: Logo,
  head: Head,
};

export default themeConfig;
