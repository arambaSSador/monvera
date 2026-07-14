import type { Metadata } from "next";

export const metadata: Metadata = {
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
