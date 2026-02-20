import React from "react";

function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  const rowClasses = isHeader ? "bg-[#debfa366]" : "bg-[#f5f5f5ab]";

  const cellClasses = "border border-gray-400 p-2 text-left";

  if (isHeader) {
    return (
      <tr className={rowClasses}>
        {textSecondCell === null ? (
          <th
            className={cellClasses}
            colSpan={2}
            style={{ textAlign: "center" }}
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={cellClasses}>{textFirstCell}</th>
            <th className={cellClasses}>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={rowClasses}>
        <td className={`${cellClasses} pl-[8px]`}>{textFirstCell}</td>
        <td className={`${cellClasses} pl-[8px]`}>{textSecondCell}</td>
      </tr>
    );
  }
}

export default CourseListRow;
