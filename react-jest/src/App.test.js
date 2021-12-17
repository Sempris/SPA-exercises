import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/testing example/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("description", () => {
//   expect(true).toBe(true);
// });

test("should render App component", () => {
  render(<App />);

  const heading = screen.getByRole('heading', {name: /testing example/i});
  expect(heading).toBeInTheDocument();

  const paragraphElement = screen.getByTestId('main-p');
  expect(paragraphElement).toHaveTextContent(/id/i);
  expect(paragraphElement).toHaveStyle({color: 'blue'});

  const buttonElement = screen.getByRole('button');
  expect(buttonElement.textContent).toBe('LightGreen');
  fireEvent.click(buttonElement);
});
