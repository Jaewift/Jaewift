import type { Metadata } from "next";
import "./globals.css";
import { LoadingBar } from "@cher1shrxd/loading";
import { ThemeSetter } from "@/shared/themes/ThemeSetter";
import Header from "@/widgets/header/ui/Header";
import Footer from "@/widgets/footer/ui/Footer";
import LenisProvider from "@/shared/providers/LenisProvider";
import Script from "next/script";
import InitScrollProvider from "@/shared/providers/InitScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://cher1shrxd.me"),
  title: "jaekyu's Portfolio",
  description:
    "다음 사람이 망설이지 않는 코드를 쓰는 개발자, 김태우입니다. 프론트엔드 개발자로서 사용자 경험과 코드 품질을 중요하게 생각합니다.",
  keywords: [
    "jaekyu",
    "박재규",
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "웹 개발",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Web Developer",
  ],
  authors: [{ name: "박재규", url: "https://cher1shrxd.me" }],
  creator: "jaekyu",
  publisher: "jaekyu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://cher1shrxd.me",
    siteName: "jaekyu's Portfolio",
    title: "jaekyu's Portfolio",
    description: "기술적인 문제를 해결하고 사용자 경험을 개선하는 과정에서 성취감을 느끼며 성장하는 프론트엔드 개발자, 박재규입니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "jaekyu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "jaekyu's Portfolio",
    description: "기술적인 문제를 해결하고 사용자 경험을 개선하는 과정에서 성취감을 느끼며 성장하는 프론트엔드 개발자, 박재규입니다.",
    creator: "@jaekyu",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <ThemeSetter />
        <meta name="google-adsense-account" content="ca-pub-6661151683803615" />
        <meta name="naver-site-verification" content="ced440ec8c96fd33a0835e1b867f1174e1127659" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6661151683803615"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-background text-text pt-20">
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLSWZB7P');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLSWZB7P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <InitScrollProvider />
        <LoadingBar color="var(--theme-color-primary)" />
        <Header />
        <LenisProvider>
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
