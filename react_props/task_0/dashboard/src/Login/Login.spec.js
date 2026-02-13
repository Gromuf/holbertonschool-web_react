import { render } from '@testing-library/react';
import Login from './Login.jsx';

describe('Login Component', () => {
  test('renders the Login component without crashing', () => {
	render(<Login />);
  });
});
