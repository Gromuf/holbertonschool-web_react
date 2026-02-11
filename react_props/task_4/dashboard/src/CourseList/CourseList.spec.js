import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

describe('CourseList Component', () => {
  test('renders 5 different rows when it receives an array of courses', () => {
    render(<CourseList listCourses={listCourses} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5);
    expect(screen.getByText('ES6')).toBeDefined();
    expect(screen.getByText('React')).toBeDefined();
  });

  test('renders 3 rows when listCourses is empty (2 headers + "No course available yet")', () => {
    render(<CourseList listCourses={[]} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
    expect(screen.getByText('No course available yet')).toBeDefined();
  });

});
