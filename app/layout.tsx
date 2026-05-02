import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloud Outage Impact Calculator — Know Your Revenue Loss Instantly",
  description: "Calculate revenue impact of cloud provider outages. Track lost revenue, SLA credits owed, and build compensation claims automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="04a86b9e-d969-4a03-a454-59f5f3fb71b5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
