"use client";

import React, { useEffect, useState } from "react";

// ----------------------
// Types & Interfaces
// ----------------------

export interface SACCO {
  id: string;
  name: string;
  location?: string;
}

export type SavingsStatus = "active" | "withdrawn" | "pending" | "dormant";

export interface SavingsRecord {
  id: string;
  memberId: string;
  saccoId: string;
  amount: number;
  date: string; // ISO date string
  status: SavingsStatus;
  sacco?: SACCO; // Will be attached after fetching
}

export interface Member {
  id: string;
  name: string;
  email?: string;
  savings: SavingsRecord[];
}

// ----------------------
// Placeholder DB/API Call
// ----------------------

// Simulate async database/API fetching
async function fetchMembersWithSavings(): Promise<{
  members: Member[];
  saccos: SACCO[];
}> {
  // In a real app, replace with Prisma/TypeORM/REST/GraphQL call here
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        saccos: [
          { id: "s1", name: "Greenfield SACCO", location: "Nairobi" },
          { id: "s2", name: "Sunrise SACCO", location: "Mombasa" },
        ],
        members: [
          {
            id: "m1",
            name: "Alice Johnson",
            email: "alice@example.com",
            savings: [
              {
                id: "sv1",
                memberId: "m1",
                saccoId: "s1",
                amount: 5000,
                date: "2025-07-15",
                status: "active",
              },
              {
                id: "sv2",
                memberId: "m1",
                saccoId: "s2",
                amount: 2000,
                date: "2025-06-10",
                status: "withdrawn",
              },
            ],
          },
          {
            id: "m2",
            name: "Bob Smith",
            email: "bob@example.com",
            savings: [
              {
                id: "sv3",
                memberId: "m2",
                saccoId: "s1",
                amount: 1500,
                date: "2025-07-01",
                status: "pending",
              },
              {
                id: "sv4",
                memberId: "m2",
                saccoId: "s2",
                amount: 8000,
                date: "2024-12-20",
                status: "dormant",
              },
            ],
          },
        ],
      });
    }, 800)
  );
}

// ----------------------
// Utility: Group Savings by Status
// ----------------------

function groupSavingsByStatus(savings: SavingsRecord[]) {
  return {
    active: savings.filter((s) => s.status === "active"),
    withdrawn: savings.filter((s) => s.status === "withdrawn"),
    pending: savings.filter((s) => s.status === "pending"),
    dormant: savings.filter((s) => s.status === "dormant"),
  };
}

// ----------------------
// Component
// ----------------------

export default function SavingsRecords() {
  const [data, setData] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const { members, saccos } = await fetchMembersWithSavings();

        // Attach SACCO details to each savings record
        const enrichedMembers = members.map((member) => ({
          ...member,
          savings: member.savings.map((record) => ({
            ...record,
            sacco: saccos.find((s) => s.id === record.saccoId),
          })),
        }));

        setData(enrichedMembers);
      } catch (err) {
        console.error(err);
        setError("Failed to load savings records.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading savings records...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Members' Savings Records</h2>
      {data.map((member) => {
        const grouped = groupSavingsByStatus(member.savings);
        return (
          <div key={member.id} className="mb-8 p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.email}</p>

            {/* Active Contributions */}
            <SavingsGroup
              title="Active Contributions"
              records={grouped.active}
              color="bg-green-100"
            />

            {/* Withdrawn */}
            <SavingsGroup
              title="Withdrawn"
              records={grouped.withdrawn}
              color="bg-red-100"
            />

            {/* Pending Deposit */}
            <SavingsGroup
              title="Pending Deposit"
              records={grouped.pending}
              color="bg-yellow-100"
            />

            {/* Dormant */}
            <SavingsGroup
              title="Dormant"
              records={grouped.dormant}
              color="bg-gray-200"
            />
          </div>
        );
      })}
    </div>
  );
}

// ----------------------
// Subcomponent for grouped savings
// ----------------------

interface SavingsGroupProps {
  title: string;
  records: SavingsRecord[];
  color: string;
}

function SavingsGroup({ title, records, color }: SavingsGroupProps) {
  if (records.length === 0) return null;

  return (
    <div className={`${color} p-3 rounded-md mt-4`}>
      <h4 className="font-medium">{title}</h4>
      <ul className="list-disc list-inside">
        {records.map((record) => (
          <li key={record.id}>
            KES {record.amount.toLocaleString()} –{" "}
            {record.sacco?.name ?? "Unknown SACCO"} ({record.date})
          </li>
        ))}
      </ul>
    </div>
  );
}
