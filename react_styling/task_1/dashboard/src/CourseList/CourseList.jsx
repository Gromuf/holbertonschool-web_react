import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from '../HOC/WithLogging';

const CourseList = ({ listCourses = [] }) => {
  return (
    /* We use w-[80%] and ensure no padding on the container interferes with the table width */
    <div className="w-[80%] mx-auto my-8 p-0">
      <table id="CourseList" className="w-full border-collapse m-0 p-0">
        <thead>
          {listCourses.length === 0 ? (
            /* Header for empty state */
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
    </div>
  );
}

export default WithLogging(CourseList);
