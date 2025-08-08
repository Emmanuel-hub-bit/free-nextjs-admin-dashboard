"use client";

import React, { useEffect, useState, useRef } from "react";
import { loadLoansData, getLoanHighlight, LoanStatus } from "./LoansForm";

const LoansComponent: React.FC = () => {
  const [state, setState] = useState<Awaited<ReturnType<typeof loadLoansData>>>({
    loading: true,
    error: null,
    data: null
  });

  // Track expanded/collapsed state
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    loadLoansData().then(setState);
  }, []);

  const toggleSection = (memberId: string, status: LoanStatus) => {
    const key = `${memberId}-${status}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (state.loading) return <p>Loading loans...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div>
      {state.data?.map(({ member, loansByStatus }) => (
        <div
          key={member.id}
          style={{
            border: "1px solid #ccc",
            margin: "12px",
            padding: "12px",
            borderRadius: "6px",
            backgroundColor: "#fafafa"
          }}
        >
          <h2>{member.name} ({member.email})</h2>
          {Object.entries(loansByStatus).map(([status, loans]) => {
            const key = `${member.id}-${status}`;
            const isOpen = expandedSections[key] ?? true; // default open

            return (
              <div
                key={status}
                style={{
                  backgroundColor: getLoanHighlight(status as LoanStatus),
                  padding: "8px",
                  margin: "6px 0",
                  borderRadius: "4px"
                }}
              >
                <h4
                  style={{
                    cursor: "pointer",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    userSelect: "none"
                  }}
                  onClick={() => toggleSection(member.id, status as LoanStatus)}
                >
                  <span style={{ marginRight: "6px" }}>
                    {isOpen ? "▼" : "▶"}
                  </span>
                  {status} Loans ({loans.length})
                </h4>

                <AnimatedCollapse isOpen={isOpen}>
                  <ul style={{ marginTop: "6px" }}>
                    {loans.map(loan => (
                      <li key={loan.id}>
                        Amount: {loan.amount} | SACCO: {loan.sacco?.name} ({loan.sacco?.location})
                      </li>
                    ))}
                  </ul>
                </AnimatedCollapse>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

// ---------- Animated Collapse Component ----------
interface AnimatedCollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const AnimatedCollapse: React.FC<AnimatedCollapseProps> = ({ isOpen, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      style={{
        maxHeight: isOpen ? `${ref.current?.scrollHeight}px` : "0px",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}
    >
      {children}
    </div>
  );
};

export default LoansComponent;
