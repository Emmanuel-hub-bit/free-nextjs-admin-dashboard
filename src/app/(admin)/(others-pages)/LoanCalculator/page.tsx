// import Calendar from "@/components/calendar/Calendar";
// import PageBreadcrumb from "@/components/common/PageBreadCrumb";
// import { Metadata } from "next";
// import React from "react";

// export const metadata: Metadata = {
//   title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
//   // other metadata
// };
// export default function page() {
//   return (
//     <div>
//       <PageBreadcrumb pageTitle="Calendar" />
//       <Calendar />
//     </div>
//   );
// }

// src/app/(admin)/(others-pages)/LoanCalculator/page.tsx
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata: Metadata = {
  title: "Loan Calculator | TailAdmin - Next.js Dashboard Template",
  description:
    "This is a Loan Calculator page for TailAdmin Tailwind CSS Admin Dashboard Template",
};

export default function Page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Loan Calculator" />
      <LoanCalculatorClient />
    </div>
  );
}
