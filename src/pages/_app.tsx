import "@/assets/styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import React from "react";
import Head from "next/head";
import config from "@/root/config";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Notifications />
      <Head>
        <title>{config.title}</title>
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

