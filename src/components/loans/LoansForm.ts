// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import Badge from "../ui/badge/Badge";
// import Image from "next/image";

// // Define the TypeScript interface for the table rows
// interface Product {
//   id: number; // Unique identifier for each product
//   name: string; // Product name
//   variants: string; // Number of variants (e.g., "1 Variant", "2 Variants")
//   category: string; // Category of the product
//   price: string; // Price of the product (as a string with currency symbol)
//   // status: string; // Status of the product
//   image: string; // URL or path to the product image
//   status: "Delivered" | "Pending" | "Canceled"; // Status of the product
// }

// // Define the table data using the interface
// const tableData: Product[] = [
//   {
//     id: 1,
//     name: "MacBook Pro 13”",
//     variants: "2 Variants",
//     category: "Laptop",
//     price: "$2399.00",
//     status: "Delivered",
//     image: "/images/product/product-01.jpg", // Replace with actual image URL
//   },
//   {
//     id: 2,
//     name: "Apple Watch Ultra",
//     variants: "1 Variant",
//     category: "Watch",
//     price: "$879.00",
//     status: "Pending",
//     image: "/images/product/product-02.jpg", // Replace with actual image URL
//   },
//   {
//     id: 3,
//     name: "iPhone 15 Pro Max",
//     variants: "2 Variants",
//     category: "SmartPhone",
//     price: "$1869.00",
//     status: "Delivered",
//     image: "/images/product/product-03.jpg", // Replace with actual image URL
//   },
//   {
//     id: 4,
//     name: "iPad Pro 3rd Gen",
//     variants: "2 Variants",
//     category: "Electronics",
//     price: "$1699.00",
//     status: "Canceled",
//     image: "/images/product/product-04.jpg", // Replace with actual image URL
//   },
//   {
//     id: 5,
//     name: "AirPods Pro 2nd Gen",
//     variants: "1 Variant",
//     category: "Accessories",
//     price: "$240.00",
//     status: "Delivered",
//     image: "/images/product/product-05.jpg", // Replace with actual image URL
//   },
// ];

// export default function RecentOrders() {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
//       <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
//             Recent Orders
//           </h3>
//         </div>

//         <div className="flex items-center gap-3">
//           <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
//             <svg
//               className="stroke-current fill-white dark:fill-gray-800"
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M2.29004 5.90393H17.7067"
//                 stroke=""
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M17.7075 14.0961H2.29085"
//                 stroke=""
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
//                 fill=""
//                 stroke=""
//                 strokeWidth="1.5"
//               />
//               <path
//                 d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
//                 fill=""
//                 stroke=""
//                 strokeWidth="1.5"
//               />
//             </svg>
//             Filter
//           </button>
//           <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
//             See all
//           </button>
//         </div>
//       </div>
//       <div className="max-w-full overflow-x-auto">
//         <Table>
//           {/* Table Header */}
//           <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
//             <TableRow>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Products
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Category
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Price
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Status
//               </TableCell>
//             </TableRow>
//           </TableHeader>

//           {/* Table Body */}

//           <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
//             {tableData.map((product) => (
//               <TableRow key={product.id} className="">
//                 <TableCell className="py-3">
//                   <div className="flex items-center gap-3">
//                     <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
//                       <Image
//                         width={50}
//                         height={50}
//                         src={product.image}
//                         className="h-[50px] w-[50px]"
//                         alt={product.name}
//                       />
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                         {product.name}
//                       </p>
//                       <span className="text-gray-500 text-theme-xs dark:text-gray-400">
//                         {product.variants}
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {product.price}
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {product.category}
//                 </TableCell>
//                 <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   <Badge
//                     size="sm"
//                     color={
//                       product.status === "Delivered"
//                         ? "success"
//                         : product.status === "Pending"
//                         ? "warning"
//                         : "error"
//                     }
//                   >
//                     {product.status}
//                   </Badge>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }


// ---------- Interfaces ----------
export interface SACCO {
    id: string;
    name: string;
    location: string;
  }
  
  export type LoanStatus = "Pending" | "Approved" | "Active" | "Defaulted";
  
  export interface Loan {
    id: string;
    amount: number;
    status: LoanStatus;
    memberId: string;
    saccoId: string;
    sacco?: SACCO; // Will be attached after fetch
  }
  
  export interface Member {
    id: string;
    name: string;
    email: string;
    loans?: Loan[];
  }
  
  export interface GroupedLoans {
    [status: string]: Loan[];
  }
  
  export interface MemberWithGroupedLoans {
    member: Member;
    loansByStatus: GroupedLoans;
  }
  
  // ---------- Highlight Utility ----------
  export function getLoanHighlight(status: LoanStatus): string {
    const colors: Record<LoanStatus, string> = {
      Pending: "yellow",
      Approved: "lightgreen",
      Active: "lightblue",
      Defaulted: "lightcoral"
    };
    return colors[status];
  }
  
  // ---------- Placeholder Database/API Fetch ----------
  async function fetchMembersFromDB(): Promise<Member[]> {
    return Promise.resolve([
      { id: "m1", name: "John Doe", email: "john@example.com" },
      { id: "m2", name: "Jane Smith", email: "jane@example.com" }
    ]);
  }
  
  async function fetchLoansFromDB(): Promise<Loan[]> {
    return Promise.resolve([
      { id: "l1", amount: 5000, status: "Pending", memberId: "m1", saccoId: "s1" },
      { id: "l2", amount: 15000, status: "Approved", memberId: "m1", saccoId: "s2" },
      { id: "l3", amount: 2000, status: "Active", memberId: "m2", saccoId: "s1" },
      { id: "l4", amount: 1000, status: "Defaulted", memberId: "m2", saccoId: "s3" }
    ]);
  }
  
  async function fetchSaccosFromDB(): Promise<SACCO[]> {
    return Promise.resolve([
      { id: "s1", name: "Unity SACCO", location: "Nairobi" },
      { id: "s2", name: "Maji SACCO", location: "Mombasa" },
      { id: "s3", name: "Kifaa SACCO", location: "Kisumu" }
    ]);
  }
  
  // ---------- Grouping Helper ----------
  function groupLoansByStatus(loans: Loan[]): GroupedLoans {
    return loans.reduce((acc, loan) => {
      if (!acc[loan.status]) acc[loan.status] = [];
      acc[loan.status].push(loan);
      return acc;
    }, {} as GroupedLoans);
  }
  
  // ---------- Main Logic ----------
  export async function loadLoansData(): Promise<{
    loading: boolean;
    error: string | null;
    data: MemberWithGroupedLoans[] | null;
  }> {
    let loading = true;
    let error: string | null = null;
    let data: MemberWithGroupedLoans[] | null = null;
  
    try {
      const [members, loans, saccos] = await Promise.all([
        fetchMembersFromDB(),
        fetchLoansFromDB(),
        fetchSaccosFromDB()
      ]);
  
      // Attach SACCO details to loans
      const loansWithSacco = loans.map(loan => {
        const sacco = saccos.find(s => s.id === loan.saccoId);
        return { ...loan, sacco };
      });
  
      // Group loans by member
      data = members.map(member => {
        const memberLoans = loansWithSacco.filter(l => l.memberId === member.id);
        return {
          member,
          loansByStatus: groupLoansByStatus(memberLoans)
        };
      });
  
    } catch (err) {
      error = err instanceof Error ? err.message : "Unknown error occurred";
    } finally {
      loading = false;
    }
  
    return { loading, error, data };
  }
  