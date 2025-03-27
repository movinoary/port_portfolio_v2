import Footer from "@/components/footer";
import "./globals.scss";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Portofolio Vino Arystio",
  description: "Portofolio Mohammad Vino Arystio - Developer & Designer",
  keywords: [
    "Vino Arystio",
    "Mohammad Vino Arystio",
    "Portofolio",
    "Developer",
  ],
  openGraph: {
    title: "Portofolio Vino Arystio",
    description: "Portofolio Mohammad Vino Arystio - Developer & Designer",
    url: "https://portfolio-vo.vercel.app/",
    type: "website",
    siteName: "Portofolio Vino Arystio",
    images: [
      {
        url: "https://portfolio-vo.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Portofolio Vino Arystio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Vino Arystio",
    description: "Portofolio Mohammad Vino Arystio - Developer & Designer",
    images: ["https://portfolio-vo.vercel.app//og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
