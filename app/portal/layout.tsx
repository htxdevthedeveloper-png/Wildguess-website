import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WildGuess Operator Portal",
  description: "Strategy guides and team documentation",
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
