"use client";

import React, { useState, useMemo } from "react";

// Simulated API data (placeholder)
const mockData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    sacco: "Unity Sacco",
    saccoId: "SACCO001",
    phone: "+254700111222",
    deposits: 15000,
    loans: [
      { type: "Business Loan", status: "Active", amount: 50000 },
      { type: "Emergency Loan", status: "Completed", amount: 20000 }
    ],
    completedPayments: 20000,
    defaultedLoans: 0
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    sacco: "Sunrise Sacco",
    saccoId: "SACCO002",
    phone: "+254701222333",
    deposits: 30000,
    loans: [
      { type: "Education Loan", status: "Completed", amount: 40000 }
    ],
    completedPayments: 40000,
    defaultedLoans: 0
  },
  {
    id: 3,
    name: "Michael Otieno",
    email: "michael@example.com",
    sacco: "Unity Sacco",
    saccoId: "SACCO001",
    phone: "+254702333444",
    deposits: 5000,
    loans: [
      { type: "Agriculture Loan", status: "Defaulted", amount: 25000 }
    ],
    completedPayments: 0,
    defaultedLoans: 25000
  }
];

// Helper: pick one loan by priority
function getCurrentLoan(loans) {
  const priorityOrder = ["Active", "Defaulted", "Completed"];
  for (let status of priorityOrder) {
    const loan = loans.find(l => l.status === status);
    if (loan) return loan;
  }
  return null;
}

const ReportGeneration: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSacco, setFilterSacco] = useState("All");
  const [filterLoanStatus, setFilterLoanStatus] = useState("All");

  const filteredData = useMemo(() => {
    return mockData.filter(member => {
      const matchesName =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSacco =
        filterSacco === "All" || member.sacco === filterSacco;
      const matchesLoanStatus =
        filterLoanStatus === "All" ||
        member.loans.some(loan => loan.status === filterLoanStatus);
      return matchesName && matchesSacco && matchesLoanStatus;
    });
  }, [searchTerm, filterSacco, filterLoanStatus]);

  const uniqueSaccos = [...new Set(mockData.map(member => member.sacco))];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sacco Member Reports</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        />
        <select
          value={filterSacco}
          onChange={e => setFilterSacco(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        >
          <option value="All">All Saccos</option>
          {uniqueSaccos.map(sacco => (
            <option key={sacco} value={sacco}>
              {sacco}
            </option>
          ))}
        </select>
        <select
          value={filterLoanStatus}
          onChange={e => setFilterLoanStatus(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
        >
          <option value="All">All Loan Statuses</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Defaulted">Defaulted</option>
        </select>
      </div>

      {/* Report Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-3 border dark:border-gray-600">Name</th>
              <th className="p-3 border dark:border-gray-600">Email</th>
              <th className="p-3 border dark:border-gray-600">Sacco</th>
              <th className="p-3 border dark:border-gray-600">Deposits</th>
              <th className="p-3 border dark:border-gray-600">Loans</th>
              <th className="p-3 border dark:border-gray-600">Completed Payments</th>
              <th className="p-3 border dark:border-gray-600">Defaulted Loans</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(member => {
              // Decide which loans to display
              let loansToDisplay;
              if (filterLoanStatus === "All") {
                const currentLoan = getCurrentLoan(member.loans);
                loansToDisplay = currentLoan ? [currentLoan] : [];
              } else {
                loansToDisplay = member.loans.filter(
                  loan => loan.status === filterLoanStatus
                );
              }

              return (
                <tr key={member.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="p-3 border dark:border-gray-600">{member.name}</td>
                  <td className="p-3 border dark:border-gray-600">{member.email}</td>
                  <td className="p-3 border dark:border-gray-600">{member.sacco}</td>
                  <td className="p-3 border dark:border-gray-600">
                    KES {member.deposits.toLocaleString()}
                  </td>
                  <td className="p-3 border dark:border-gray-600">
                    {loansToDisplay.length > 0 ? (
                      loansToDisplay.map((loan, idx) => (
                        <span
                          key={idx}
                          className={`inline-block px-2 py-1 rounded text-sm font-medium mr-2 ${
                            loan.status === "Active"
                              ? "bg-green-200 dark:bg-green-700"
                              : loan.status === "Completed"
                              ? "bg-blue-200 dark:bg-blue-700"
                              : "bg-red-200 dark:bg-red-700"
                          }`}
                        >
                          {loan.type} ({loan.status})
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">No loan</span>
                    )}
                  </td>
                  <td className="p-3 border dark:border-gray-600">
                    KES {member.completedPayments.toLocaleString()}
                  </td>
                  <td className="p-3 border dark:border-gray-600 text-red-600 dark:text-red-400">
                    KES {member.defaultedLoans.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredData.length === 0 && (
          <p className="mt-4 text-center text-gray-500">No matching records found.</p>
        )}
      </div>
    </div>
  );
};

export default ReportGeneration;
