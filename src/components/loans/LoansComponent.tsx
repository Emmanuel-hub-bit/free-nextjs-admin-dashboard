// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { loadLoansData, getLoanHighlight, LoanStatus } from "./LoansForm";

// const LoansComponent: React.FC = () => {
//   const [state, setState] = useState<Awaited<ReturnType<typeof loadLoansData>>>({
//     loading: true,
//     error: null,
//     data: null
//   });

//   // Track expanded/collapsed state
//   const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     loadLoansData().then(setState);
//   }, []);

//   const toggleSection = (memberId: string, status: LoanStatus) => {
//     const key = `${memberId}-${status}`;
//     setExpandedSections(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   if (state.loading) return <p>Loading loans...</p>;
//   if (state.error) return <p>Error: {state.error}</p>;

//   return (
//     <div>
//       {state.data?.map(({ member, loansByStatus }) => (
//         <div
//           key={member.id}
//           style={{
//             border: "1px solid #ccc",
//             margin: "12px",
//             padding: "12px",
//             borderRadius: "6px",
//             backgroundColor: "#fafafa"
//           }}
//         >
//           <h2>{member.name} ({member.email})</h2>
//           {Object.entries(loansByStatus).map(([status, loans]) => {
//             const key = `${member.id}-${status}`;
//             const isOpen = expandedSections[key] ?? true; // default open

//             return (
//               <div
//                 key={status}
//                 style={{
//                   backgroundColor: getLoanHighlight(status as LoanStatus),
//                   padding: "8px",
//                   margin: "6px 0",
//                   borderRadius: "4px"
//                 }}
//               >
//                 <h4
//                   style={{
//                     cursor: "pointer",
//                     margin: 0,
//                     display: "flex",
//                     alignItems: "center",
//                     userSelect: "none"
//                   }}
//                   onClick={() => toggleSection(member.id, status as LoanStatus)}
//                 >
//                   <span style={{ marginRight: "6px" }}>
//                     {isOpen ? "▼" : "▶"}
//                   </span>
//                   {status} Loans ({loans.length})
//                 </h4>

//                 <AnimatedCollapse isOpen={isOpen}>
//                   <ul style={{ marginTop: "6px" }}>
//                     {loans.map(loan => (
//                       <li key={loan.id}>
//                         Amount: {loan.amount} | SACCO: {loan.sacco?.name} ({loan.sacco?.location})
//                       </li>
//                     ))}
//                   </ul>
//                 </AnimatedCollapse>
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// // ---------- Animated Collapse Component ----------
// interface AnimatedCollapseProps {
//   isOpen: boolean;
//   children: React.ReactNode;
// }

// const AnimatedCollapse: React.FC<AnimatedCollapseProps> = ({ isOpen, children }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   return (
//     <div
//       ref={ref}
//       style={{
//         maxHeight: isOpen ? `${ref.current?.scrollHeight}px` : "0px",
//         overflow: "hidden",
//         transition: "max-height 0.3s ease",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default LoansComponent;

"use client";
import React, { useEffect, useState, useRef } from "react";
import { loadLoansData, getLoanHighlight, LoanStatus } from "./LoansForm";

const LoansComponent: React.FC = () => {
  const [state, setState] = useState<Awaited<ReturnType<typeof loadLoansData>>>({
    loading: true,
    error: null,
    data: null
  });

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

  if (state.loading) return <p className="text-gray-500">Loading loans...</p>;
  if (state.error) return <p className="text-red-500">Error: {state.error}</p>;

  return (
    <div className="space-y-6 p-4">
      {state.data?.map(({ member, loansByStatus }) => (
        <div
          key={member.id}
          className="rounded-lg shadow-md border border-gray-200 bg-white p-6 hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {member.name} <span className="text-gray-500">({member.email})</span>
          </h2>

          {Object.entries(loansByStatus).map(([status, loans]) => {
            const key = `${member.id}-${status}`;
            const isOpen = expandedSections[key] ?? true;

            return (
              <div
                key={status}
                className="rounded-md p-4 mb-3"
                style={{
                  backgroundColor: getLoanHighlight(status as LoanStatus) || "#F3F4F6",
                }}
              >
                <h4
                  className="flex items-center cursor-pointer text-gray-800 font-medium"
                  onClick={() => toggleSection(member.id, status as LoanStatus)}
                >
                  <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
                  {status} Loans <span className="ml-2 text-sm text-gray-600">({loans.length})</span>
                </h4>

                <AnimatedCollapse isOpen={isOpen}>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {loans.map(loan => (
                      <li key={loan.id} className="bg-white rounded px-3 py-2 shadow-sm">
                        <span className="font-medium">Amount:</span> {loan.amount} |{" "}
                        <span className="font-medium">SACCO:</span> {loan.sacco?.name} ({loan.sacco?.location})
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
