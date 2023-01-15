// @ts-check
import Nextra from "nextra";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

const withNextra = Nextra({
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type {import("next").NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true,
  },
};

export default withNextra(config);
