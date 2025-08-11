"use client";

import React, { useState } from "react";

export default function LoanCalculatorClient() {
  const [amount, setAmount] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [years, setYears] = useState<string>("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const formatCurrency = (value: number) =>
    value.toLocaleString("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 2,
    });

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualInterest = parseFloat(interest);
    const loanYears = parseInt(years);

    if (isNaN(principal) || principal <= 0) {
      setError("Please enter a valid loan amount greater than 0.");
      return;
    }
    if (isNaN(annualInterest) || annualInterest < 0) {
      setError("Please enter a valid interest rate (0 or higher).");
      return;
    }
    if (isNaN(loanYears) || loanYears <= 0) {
      setError("Please enter a valid loan term in years greater than 0.");
      return;
    }

    setError(null);

    const monthlyInterest = annualInterest / 100 / 12;
    const numberOfPayments = loanYears * 12;

    let monthly: number;

    if (monthlyInterest === 0) {
      monthly = principal / numberOfPayments;
    } else {
      monthly =
        (principal *
          monthlyInterest *
          Math.pow(1 + monthlyInterest, numberOfPayments)) /
        (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
    }

    const total = monthly * numberOfPayments;
    const interestPaid = total - principal;

    setMonthlyPayment(monthly);
    setTotalPayment(total);
    setTotalInterest(interestPaid);
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Loan Calculator
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>
      )}

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Loan Amount (KES)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          placeholder="Enter loan amount"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Interest Rate (%)
        </label>
        <input
          type="number"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          placeholder="Enter annual interest rate"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Loan Term (Years)
        </label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
          placeholder="Enter loan term in years"
        />
      </div>

      <button
        onClick={calculateLoan}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Calculate
      </button>

      {monthlyPayment !== null && !error && (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 rounded-lg text-gray-900 dark:text-gray-100">
          <p className="text-lg font-medium">
            Monthly Payment:{" "}
            <span className="font-bold">
              {formatCurrency(monthlyPayment)}
            </span>
          </p>
          <p className="mt-2">
            Total Payment:{" "}
            <span className="font-bold">{formatCurrency(totalPayment!)}</span>
          </p>
          <p>
            Total Interest Paid:{" "}
            <span className="font-bold">
              {formatCurrency(totalInterest!)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
