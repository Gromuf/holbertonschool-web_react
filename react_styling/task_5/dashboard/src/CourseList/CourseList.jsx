import React from "react";
import CourseListRow from "./CourseListRow";
import WithLogging from "../HOC/WithLogging";

const CourseList = ({ listCourses = [] }) => {
  return (
    <div className="w-full my-8 overflow-x-auto p-4">
      <table
        id="CourseList"
        className="w-full border-collapse border border-gray-400"
      >
        <thead>
          {listCourses.length === 0 ? (
            <CourseListRow
              textFirstCell="No course available yet"
              isHeader={true}
            />
          ) : (
            <>
              <CourseListRow
                textFirstCell="Available courses"
                isHeader={true}
              />
              <CourseListRow
                textFirstCell="Course name"
                textSecondCell="Credit"
                isHeader={true}
              />
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
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WithLogging(CourseList);
