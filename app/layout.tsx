import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Construction & Infrastructure AP Diagnostic | SPC3",
  description: "Trace plant hire, materials and subcontractor charges back to the commercial terms your business signed.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
