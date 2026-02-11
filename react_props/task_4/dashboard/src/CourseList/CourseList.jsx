import CourseListRow from "./CourseListRow";
import "./CourseList.css";

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id="CourseList">
      {}
      <thead>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={true} />
        ) : (
          <>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
          </>
        )}
      </thead>
      <tbody>
        {listCourses.length > 0 &&
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        }
      </tbody>
    </table>
  );
}

export default CourseList;