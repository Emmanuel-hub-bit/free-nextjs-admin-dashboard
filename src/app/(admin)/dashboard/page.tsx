// import type { Metadata } from "next";
// // import { EcommerceMetrics } from "@/components/loans/EcommerceMetrics";
// import React from "react";
// // import MonthlyTarget from "@/components/loans/MonthlyTarget";
// import LoansComponent from "@/components/loans/LoansComponent";
// import SavingsRecords from "@/components/Savings/SavingsRecords";
// import MembersList from "@/components/Members/membersList";
// import Payments from "@/components/Payments/Payments";
// import ReportGeneration from "@/components/Reports/reports";
// // import MonthlySalesChart from "@/components/loans/MonthlySalesChart";
// // import StatisticsChart from "@/components/loans/StatisticsChart";
// // import RecentOrders from "@/components/loans/LoansForm";
// // import DemographicCard from "@/components/loans/DemographicCard";

// export const metadata: Metadata = {
//   title:
//     "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Home for TailAdmin Dashboard Template",
// };

// export default function Ecommerce() {
//   return (
//     <div className="grid grid-cols-12 gap-4 md:gap-6">
//       {/* {<div className="col-span-12 space-y-6 xl:col-span-7">
//         <EcommerceMetrics />

//         <MonthlySalesChart />
//       </div>

//       <div className="col-span-12 xl:col-span-5">
//         <MonthlyTarget />
//       </div>

//       <div className="col-span-12">
//         <StatisticsChart />
//       </div>

//       <div className="col-span-12 xl:col-span-5">
//         <DemographicCard />
//       </div>} */}

//       <div className="col-span-12 xl:col-span-7">
//         <LoansComponent />
//       </div>

//       <div className="col-span-12 xl:col-span-7">
//         <SavingsRecords />
//       </div>

//       <div className="col-span-12 xl:col-span-7">
//         <MembersList />
//       </div>

//       <div className="col-span-12 xl:col-span-7">
//         <Payments />
//       </div>

//       <div className="col-span-12 xl:col-span-7">
//         <ReportGeneration />
//       </div>
//     </div>
//   );
// }


import type { Metadata } from "next";
import React from "react";
import LoansComponent from "@/components/loans/LoansComponent";
import SavingsRecords from "@/components/Savings/SavingsRecords";
import MembersList from "@/components/Members/membersList";
import Payments from "@/components/Payments/Payments";
import ReportGeneration from "@/components/Reports/reports";

export const metadata: Metadata = {
  title: "Loan Admin Dashboard",
  description: "Manage loans, members, payments, and reports",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 p-6">
      <div className="col-span-12 xl:col-span-7">
        <LoansComponent />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <SavingsRecords />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <MembersList />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <Payments />
      </div>
      <div className="col-span-12 xl:col-span-7">
        <ReportGeneration />
      </div>
    </div>
  );
}

