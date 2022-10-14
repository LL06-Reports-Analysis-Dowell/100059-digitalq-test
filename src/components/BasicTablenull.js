import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./Colums";

import "./table.css";
const apidatas = [];
function BasicTablenull() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => apidatas, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, headerGroups } = tableInstance;
  if (true) {
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}> {column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          <div>Loading...</div>
        </tbody>
      </table>
    );
  } else {
  }
}

export default BasicTablenull;
