// import React, { useMemo } from "react";
// import { useTable } from "react-table";
// import { COLUMNS } from "./Colums";

// import "./table.css";

// function BasicTable(apidatas) {
//   const columns = useMemo(() => COLUMNS, []);
//   let data = useMemo(() => apidatas, [apidatas]);

//   const tableInstance = useTable({
//     columns,
//     data,
//   });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;
//   if (true) {
//     return (
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroups) => (
//             <tr {...headerGroups.getHeaderGroupProps()}>
//               {headerGroups.headers.map((column) => (
//                 <th {...column.getHeaderProps()}> {column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   } else {
//   }
// }

// export default BasicTable;

import React from "react";

export default function BasicTable(dish) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">cost</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {dish.normal.data[0].map((dats) => (
            <tr key={dats._id}>
              <th scope="row">{dats.dish_cost}</th>
              <td>{dats.dish_price}</td>
              <td>{dats.dish_name}</td>
              <td>{dats.dish_code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
