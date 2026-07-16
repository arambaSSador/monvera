import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monvera.am";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MONVERA LLC",
  description: "Official COGELSA Industrial Lubricants Distributor in Armenia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
