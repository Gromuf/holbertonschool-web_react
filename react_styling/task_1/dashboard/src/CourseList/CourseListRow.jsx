import React from 'react';

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  const rowStyle = {
    backgroundColor: isHeader ? 'var(--color-table-header)' : 'var(--color-table-rows)'
  };

  const rowClasses = isHeader ? 'bg-opacity-65' : 'bg-opacity-45';
  
  const cellClasses = 'border border-gray-400';

  return (
    <tr style={rowStyle} className={rowClasses}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={cellClasses} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className={cellClasses}>{textFirstCell}</th>
            <th className={cellClasses}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={`${cellClasses} pl-2`}>{textFirstCell}</td>
          <td className={`${cellClasses} pl-2`}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

export default CourseListRow;