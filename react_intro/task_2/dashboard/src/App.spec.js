import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App Component', () => {
  test('renders the h1 with text School dashboard', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      level: 1,
      name: 'School dashboard',
    });
    expect(heading).toBeInTheDocument();
  });
  test('renders the correct text in body and footer paragraphs', () => {
	render(<App />);
	const bodyParagraph = screen.getByText('Login to access the full dashboard');
	const footerParagraph = screen.getByText(/copyright\s+\d{4}\s+-\s+holberton school/i);
	expect(bodyParagraph).toBeInTheDocument();
	expect(footerParagraph).toBeInTheDocument();
  });
  test('renders an image with alt text holberton logo', () => {
	render(<App />);
	const logoImage = screen.getByAltText('holberton logo');
	expect(logoImage).toBeInTheDocument();
  });
  test('renders email and password input fields', () => {
    render(<App />);
    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  test('renders email and password labels elements', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText('email');
    const passwordLabel = screen.getByLabelText('password');
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });
  test('renders OK button', () => {
    render(<App />);
    const okButton = screen.getByText('OK');
    expect(okButton).toBeInTheDocument();
  });
});
