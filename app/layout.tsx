import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churn Risk Scorer — Predict Which Customers Will Cancel",
  description: "Analyze usage patterns, support tickets, and billing history to score churn risk and suggest retention actions for your SaaS."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8619910c-dcb4-421f-a74e-b7c2643a1f94"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
