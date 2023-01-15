import type { ReactElement } from "react";
import type { AppProps } from "next/app";

import "../styles/global.css";

export default function MyBlog({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
