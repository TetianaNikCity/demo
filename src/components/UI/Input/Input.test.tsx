import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Button UI component", () => {
  const defaultValue = "Text for input";
  const renderInput = () => render(<Input defaultValue={defaultValue} />);

  test("Render Input with props", () => {
    renderInput();
    expect(screen.getByDisplayValue(defaultValue)).toBeInTheDocument();
  });
});
