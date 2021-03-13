import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Layout } from "@components/Layout";
import * as gtag from "@utils/gtag";
import { Reset } from "styles/reset";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      {Reset}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
