import { render } from "@testing-library/react";
import App from "./App";
import PlayerInfo from "./components/Battleship/PlayerInfo/PlayerInfo";

describe("App component", () => {
  test("Render PlayerInfo component", () => {
    const view = render(<App />);
    const utils = render(<PlayerInfo />);
    expect(view.baseElement).toEqual(utils.baseElement);
  });
});
