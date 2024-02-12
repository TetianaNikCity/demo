import { act, render, screen } from "@testing-library/react";
import PlayerInfo from "./PlayerInfo";
import userEvent from "@testing-library/user-event";

describe("PlayerInfo component", () => {
  test("Render default name 'Secret player'", () => {
    render(<PlayerInfo />);
    const defaultName = screen.getByText("Secret player");
    expect(defaultName).toBeInTheDocument();
  });
  test("Render default button 'Edit'", () => {
    render(<PlayerInfo />);
    const defaultButton = screen.getByRole("button");
    expect(defaultButton).toContainHTML("Edit");
  });
  test("Input is not visible", () => {
    render(<PlayerInfo />);
    const input = screen.queryByRole("input");
    expect(input).not.toBeInTheDocument();
  });
  test("Render button 'Save' on click 'Edit' button", () => {
    render(<PlayerInfo />);
    const editButton = screen.getByText("Edit");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(editButton);
    });
    const saveButton = screen.getByText("Save");
    expect(saveButton).toBeInTheDocument();
  });
  test("Render input on click 'Edit' button", () => {
    render(<PlayerInfo />);
    const editButton = screen.getByText("Edit");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(editButton);
    });
    const input = screen.getByTestId("input-element");
    expect(input).toBeInTheDocument();
  });
  test("Render new player name", () => {
    const newPlayerName = "New name";
    render(<PlayerInfo />);
    const editButton = screen.getByText("Edit");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(editButton);
    });
    const input = screen.getByTestId("input-element");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.clear(input);
      userEvent.type(input, newPlayerName);
    });
    const saveButton = screen.getByText("Save");
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(saveButton);
    });
    const newName = screen.getByText(newPlayerName);
    expect(newName).toBeInTheDocument();
  });
});
