import React from 'react';

const CourseListRow = ({ isHeader = false, textFirstCell = "", textSecondCell = null }) => {
  const rowClasses = isHeader
    ? "bg-table-header/66" 
    : "bg-table-rows/45";

  const cellClasses = "border border-gray-400 pl-2 text-left";

  return (
    <tr className={rowClasses}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={cellClasses}>{textFirstCell}</th>
        ) : (
          <>
            <th className={cellClasses}>{textFirstCell}</th>
            <th className={cellClasses}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={cellClasses}>{textFirstCell}</td>
          <td className={cellClasses}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

export default CourseListRow;
