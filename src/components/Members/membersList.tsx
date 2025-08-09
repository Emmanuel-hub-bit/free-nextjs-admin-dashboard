"use client";

import React, { useEffect, useState } from "react";

interface Member {
  id: number;
  name: string;
  email: string;
  saccoName: string;
  saccoId: string;
  phone: string;
}

const mockMembers: Member[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    saccoName: "Sunrise SACCO",
    saccoId: "SAC001",
    phone: "+254700111222",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    saccoName: "Greenfield SACCO",
    saccoId: "SAC002",
    phone: "+254701333444",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    saccoName: "Unity SACCO",
    saccoId: "SAC003",
    phone: "+254702555666",
  },
];

const MembersList: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));

        // Mock data for now
        setMembers(mockMembers);
        return;

        // Uncomment when API is ready
        /*
        const res = await fetch("https://api.example.com/members", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch members");
        }

        const data: Member[] = await res.json();
        setMembers(data);
        */
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <p className="text-gray-800 dark:text-gray-200">Loading members...</p>;
  if (error) return <p className="text-red-600 dark:text-red-400">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Sacco Members</h1>
      {members.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300">No members found.</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-gray-100">
                  Name
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-gray-100">
                  Email
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-gray-100">
                  Sacco
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-gray-100">
                  Sacco ID
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-900 dark:text-gray-100">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr
                  key={member.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {member.name}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {member.email}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {member.saccoName}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {member.saccoId}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-800 dark:text-gray-200">
                    {member.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MembersList;
