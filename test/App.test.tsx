import { App } from "../src/App";
import { mount } from "./util/configureEnzyme";

describe("Behaviour of App component", () => {
  it("Contains hello", () => {
    const component = mount(<App />);
    expect(component).toHaveText("hello")
  });
});
