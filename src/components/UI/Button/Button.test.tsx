import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button UI component", () => {
  const btnTitleProps = "Text";
  const renderButton = () => render(<Button title={btnTitleProps} />);

  test("Render Button with props", () => {
    renderButton();
    expect(screen.getByText(btnTitleProps)).toBeInTheDocument();
  });
});
