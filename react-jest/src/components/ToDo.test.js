import { render, screen } from "@testing-library/react";
import ToDo from "./ToDo";

test("should render App component", () => {
    render(<ToDo />);
  
    const todoElement = screen.getByRole('heading', {name: /hello, world!/i});
    expect(todoElement).toBeInTheDocument();
  });