import React from "react";
import TableRow from "./TableRow"; // assuming TableRow component is in a separate file

const Table = () => {
  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="flex font-bold border border-red-500"></div>

      {/* Table Rows */}
      <TableRow
        title="MADHURI"
        jodi="248-43-490"
        startTime="11:45 AM"
        endTime="12:45 PM"
      />
      <TableRow
        title="KARNATAKA DAY"
        jodi="589-20-280"
        startTime="10:00 AM"
        endTime="11:00 PM"
      />
      <TableRow
        title="MAIN KALYAN"
        jodi="330-62-336"
        startTime="01:10 PM"
        endTime="03:10 PM"
      />
      <TableRow
        title="KALYAN"
        jodi="344-16-268"
        startTime="04:25 AM"
        endTime="06:25 PM"
      />
      <TableRow
        title="MAIN BAZAR"
        jodi="289-90-389"
        startTime="09:55 AM"
        endTime="12:08 AM"
      />
      <TableRow
        title="KALYAN NIGHT"
        jodi="267-51-489"
        startTime="09:20 PM"
        endTime="11:20 PM"
      />
      <TableRow
        title="OLD MAIN MUMBAI"
        jodi="120-32-345"
        startTime="09:30 PM"
        endTime="12:05 AM"
      />
      <TableRow
        title="RATAN KHATRI"
        jodi="580-39-469"
        startTime="10:00 PM"
        endTime="12:00 AM"
      />
      
    </div>
  );
};

export default Table;
