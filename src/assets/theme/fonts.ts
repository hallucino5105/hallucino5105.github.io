import localFont from "next/font/local";

export const fontOpenSans = localFont({
  src: "../../../files/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
  display: "swap",
  variable: "--fonts-open-sans",
  preload: false,
});

export const fontRobotoMono = localFont({
  src: "../../../files/fonts/Roboto_Mono/RobotoMono-VariableFont_wght.ttf",
  display: "swap",
  preload: false,
  variable: "--fonts-roboto-mono",
});

export const fontOverpass = localFont({
  src: "../../../files/fonts/Overpass/Overpass-VariableFont_wght.ttf",
  display: "swap",
  preload: false,
  variable: "--fonts-overpass",
});

export const fontNotoSansJP = localFont({
  src: "../../../files/fonts/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf",
  display: "swap",
  preload: false,
  variable: "--fonts-noto-sans-jp",
});

export const fontRoboto = localFont({
  src: [
    {
      path: "../../../files/fonts/Roboto/Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Roboto/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Roboto/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--fonts-roboto",
});

export const fontPoppins = localFont({
  src: [
    {
      path: "../../../files/fonts/Poppins/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../files/fonts/Poppins/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--fonts-poppins",
});

export const fontVariables = [
  fontOpenSans.variable,
  fontRoboto.variable,
  fontRobotoMono.variable,
  fontOverpass.variable,
  fontPoppins.variable,
  fontNotoSansJP.variable,
].join(" ");

