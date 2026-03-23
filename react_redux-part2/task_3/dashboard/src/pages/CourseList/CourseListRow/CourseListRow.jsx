import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  row: {
    backgroundColor: "#f5f5f5ab",
  },
  rowChecked: { backgroundColor: "#e6e4e4" },
});

export default function CourseListRow({
  id,
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
  isSelected = false,
  onChangeRow = () => {},
}) {
  const rowStyle = isHeader ? styles.headerRow : styles.row;
  const selectedStyle = isSelected ? styles.rowChecked : null;

  return isHeader ? (
    <tr className={css(rowStyle)}>
      <th colSpan={textSecondCell ? 1 : 3}>{textFirstCell}</th>
      {textSecondCell ? <th>{textSecondCell}</th> : null}
    </tr>
  ) : (
    <tr className={css(rowStyle, selectedStyle)}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onChangeRow(id, e.target.checked)}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}
