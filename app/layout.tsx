import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import ContainerLayout from "@/components/ContainerLayout";
import ToggleMood from "@/context/ToggleMood";
import ToggleCategory from "@/context/ToggleCategory";

export const metadata: Metadata = {
  title: "Mo Is Getting Better",
  description: "Mo Is Getting Better  Every Day ",
};
const josefinSans = Josefin_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} text-black antialiased scroll-smooth`}
      >
        <ToggleMood>
          <ContainerLayout>
            <ToggleCategory>
              <main className="px-10">{children}</main>
            </ToggleCategory>
          </ContainerLayout>
        </ToggleMood>
      </body>
    </html>
  );
}
