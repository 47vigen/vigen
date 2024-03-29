//@ts-check
import { useRouter } from "next/router";

export const Head = ({
  title = "",
  meta = {
    image: undefined,
    description: undefined,
  },
}) => {
  const { route } = useRouter();

  const ogImage =
    meta.image ||
    `https://swr-card.vercel.app${
      /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
    }`;

  return (
    <>
      {/* Favicons, meta */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content={
          meta.description ||
          "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
        }
      />
      <meta
        name="og:description"
        content={
          meta.description ||
          "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again."
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="og:title"
        content={
          title ? title + " – SWR" : "SWR: React Hooks for Data Fetching"
        }
      />
      <meta name="og:image" content={ogImage} />
      <meta name="apple-mobile-web-app-title" content="SWR" />
    </>
  );
};
