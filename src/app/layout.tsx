import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { MuteProvider } from "@/context/MuteProvider";
import "../css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jelajah Sendi",
  description: "Website edukasi berbasis gamifikasi tentang struktur anatomi sendi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MuteProvider>{children}</MuteProvider>
        </Providers>
      </body>
    </html>
  );
}
