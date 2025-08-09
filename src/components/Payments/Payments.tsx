// import React, { useEffect, useState } from "react";

// interface Payment {
//   id: string;
//   memberName: string;
//   saccoName: string;
//   loanId: string;
//   repaymentAmount: number;
//   repaymentDate: string;
//   nextScheduledPayment?: string;
//   skippedPayments?: number;
//   defaultedPayments?: number;
// }

// const PaymentsTracker: React.FC = () => {
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // API fetch
//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         const res = await fetch("https://api.example.com/payments");
//         if (!res.ok) {
//           throw new Error("Failed to fetch payments data");
//         }
//         const data = await res.json();
//         setPayments(data);
//         setLoading(false);
//       } catch (err) {
//         setError((err as Error).message);
//         setLoading(false);
//       }
//     };

//     fetchPayments();
//   }, []);

//   if (loading) return <p className="text-blue-500">Loading payments...</p>;
//   if (error) return <p className="text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
//         Sacco Loan Repayment Tracker
//       </h1>

//       {payments.length === 0 ? (
//         <p className="text-gray-500 dark:text-gray-400">
//           No payment records found.
//         </p>
//       ) : (
//         <div className="grid gap-4">
//           {payments.map((payment) => (
//             <div
//               key={payment.id}
//               className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
//             >
//               <h2 className="text-lg font-semibold text-green-700 dark:text-green-400">
//                 {payment.memberName} — {payment.saccoName}
//               </h2>
//               <p className="text-sm text-gray-700 dark:text-gray-300">
//                 Loan ID: {payment.loanId}
//               </p>
//               <p className="text-sm text-indigo-700 dark:text-indigo-300">
//                 Last Repayment: KES {payment.repaymentAmount} on{" "}
//                 {new Date(payment.repaymentDate).toLocaleDateString()}
//               </p>
//               {payment.nextScheduledPayment && (
//                 <p className="text-sm text-yellow-700 dark:text-yellow-300">
//                   Next Payment:{" "}
//                   {new Date(payment.nextScheduledPayment).toLocaleDateString()}
//                 </p>
//               )}
//               {payment.skippedPayments !== undefined && (
//                 <p className="text-sm text-orange-700 dark:text-orange-300">
//                   Skipped Payments: {payment.skippedPayments}
//                 </p>
//               )}
//               {payment.defaultedPayments !== undefined && (
//                 <p className="text-sm text-red-700 dark:text-red-400">
//                   Defaulted Payments: {payment.defaultedPayments}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentsTracker;

"use client";

import React, { useState, useEffect } from "react";

interface Payment {
  memberName: string;
  saccoName: string;
  loanId: string;
  amountRepaid: number;
  totalLoan: number;
  nextPaymentDate: string;
  skippedPayments: number;
  defaultedPayments: number;
}

const Payments: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);

  // Simulate API call with placeholder data
  useEffect(() => {
    const mockData: Payment[] = [
      {
        memberName: "John Doe",
        saccoName: "Sunrise SACCO",
        loanId: "LN001",
        amountRepaid: 45000,
        totalLoan: 80000,
        nextPaymentDate: "2025-09-15",
        skippedPayments: 1,
        defaultedPayments: 0
      },
      {
        memberName: "Jane Smith",
        saccoName: "Unity SACCO",
        loanId: "LN002",
        amountRepaid: 20000,
        totalLoan: 20000,
        nextPaymentDate: "Paid Off",
        skippedPayments: 0,
        defaultedPayments: 0
      },
      {
        memberName: "Michael Brown",
        saccoName: "Hope SACCO",
        loanId: "LN003",
        amountRepaid: 30000,
        totalLoan: 90000,
        nextPaymentDate: "2025-09-20",
        skippedPayments: 2,
        defaultedPayments: 1
      }
    ];

    setPayments(mockData);
  }, []);

  // Function to get percentage progress
  const getProgress = (paid: number, total: number) =>
    ((paid / total) * 100).toFixed(1);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Loan Repayment Tracking</h1>
      <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gray-300 dark:bg-gray-800">
            <th className="p-3 text-left">Member</th>
            <th className="p-3 text-left">Sacco</th>
            <th className="p-3 text-left">Loan ID</th>
            <th className="p-3 text-left">Amount Repaid</th>
            <th className="p-3 text-left">Progress</th>
            <th className="p-3 text-left">Next Payment</th>
            <th className="p-3 text-left">Skipped</th>
            <th className="p-3 text-left">Defaulted</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, index) => (
            <tr
              key={index}
              className="border-t border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <td className="p-3">{p.memberName}</td>
              <td className="p-3">{p.saccoName}</td>
              <td className="p-3">{p.loanId}</td>
              <td className="p-3">
                KES {p.amountRepaid.toLocaleString()} /{" "}
                {p.totalLoan.toLocaleString()}
              </td>
              <td className="p-3">
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className="h-4 rounded-full"
                    style={{
                      width: `${getProgress(p.amountRepaid, p.totalLoan)}%`,
                      backgroundColor:
                        parseFloat(getProgress(p.amountRepaid, p.totalLoan)) >=
                        70
                          ? "#16a34a" // Green for good progress
                          : "#eab308" // Yellow for moderate
                    }}
                  ></div>
                </div>
              </td>
              <td className="p-3">{p.nextPaymentDate}</td>
              <td
                className={`p-3 font-bold ${
                  p.skippedPayments > 0
                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {p.skippedPayments}
              </td>
              <td
                className={`p-3 font-bold ${
                  p.defaultedPayments > 0
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {p.defaultedPayments}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
