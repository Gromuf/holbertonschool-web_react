import React from 'react';

const CourseListRow = ({ isHeader = false, textFirstCell = "", textSecondCell = null }) => {
  const rowClasses = isHeader
  ? "bg-table-header opacity-66"
  : "bg-table-rows opacity-45";

  const cellClasses = "border border-gray-400 pl-2 text-left";

	if (isHeader) {
		return (
        <tr className={rowClasses}>
          {
            textSecondCell === null ? (
              <th colSpan="2" className={cellClasses}>{textFirstCell}</th>
            ) : (
              <>
                <th className={cellClasses}>{textFirstCell}</th>
                <th className={cellClasses}>{textSecondCell}</th>
              </>
            )
          }
        </tr>
    )
  } else {
    return (
      <>
        <tr className={rowClasses}>
          <td className={cellClasses}>{textFirstCell}</td>
          <td className={cellClasses}>{textSecondCell}</td>
        </tr>
      </>
    );
  }
}

export default CourseListRow;
