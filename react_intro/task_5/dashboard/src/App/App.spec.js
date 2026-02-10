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
 test('renders 2 input elements (email and password)', () => {
    const { container } = render(<App />);

    const emailInput = container.querySelector('input[type="email"]');
    const passwordInput = container.querySelector('input[type="password"]');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders 2 label elements with text Email and Password', () => {
    render(<App />);

    const emailLabel = screen.getByText(/email/i)
    const passwordLabel = screen.getByText(/password/i)

    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
  });

  test('renders a button with the text OK', () => {
    render(<App />);

    const text = screen.getByText(/ok/i).textContent
    expect(text).toEqual(expect.stringMatching(/ok/i))
  });
});
