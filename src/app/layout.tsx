import Footer from "@/components/footer";
import "./globals.scss";
import type { Metadata } from "next";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-vo.vercel.app/"),
  title: {
    default: "Portofolio Vino Arystio",
    template: "%s | Portofolio Vino Arystio",
  },
  description:
    "Portofolio Mohammad Vino Arystio - Web Developer & System Analysis I am a Junior Web Developer who is looking for new opportunities as a Web Developer in various fields. I have completed the Fullstack Developer Bootcamp at dumbways.id and have more than 7 years of experience learning in the IT world, covering both hardware and software aspects. In my previous work experience, I have good adaptability to existing code and can complete tasks quickly. I am very excited to develop my skills in the IT field and continue to learn new things in this industry.",
  keywords: [
    "Vino Arystio",
    "Mohammad Vino Arystio",
    "Portofolio",
    "Developer",
    "System Analysis",
    "Sistem Analisis",
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
  ],
  verification: {
    google: "0LKRGk5uve0hPUt0HRXUYe587RWoUvCGAaDawi1g0yw",
  },
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
