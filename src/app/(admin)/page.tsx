import { AiOutlineHome, AiOutlineUser, AiOutlineBarChart, AiOutlineDollarCircle } from 'react-icons/ai';
import { FaPiggyBank } from 'react-icons/fa';

export default function AdminLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Header */}
      <header className="text-center mb-10">
        <AiOutlineHome size={60} className="mx-auto mb-4 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Welcome Back, Admin!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Manage loans, track repayments, and oversee members all in one place.
        </p>
      </header>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <AiOutlineDollarCircle size={40} className="text-green-500 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Total Loans</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">KES 2.5M</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaPiggyBank size={40} className="text-yellow-500 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Total Savings</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">KES 1.8M</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <AiOutlineUser size={40} className="text-blue-500 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Active Members</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">154</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <AiOutlineBarChart size={40} className="text-purple-500 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Repayment Rate</h2>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">92%</p>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your Management Tools</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Access loan applications, member profiles, payment records, and financial reports 
          from the sidebar to keep everything running smoothly.
        </p>
      </section>
    </div>
  );
}
