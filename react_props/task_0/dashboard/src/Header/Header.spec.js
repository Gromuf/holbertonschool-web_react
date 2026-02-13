import { render } from '@testing-library/react';
import Header from './Header.jsx';

describe('Header Component', () => {
  test('renders the Header component without crashing', () => {
	render(<Header />);
  });
});
