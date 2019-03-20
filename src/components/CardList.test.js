import CardList from "./CardList";
import React from "react";
import { shallow } from "enzyme";

it("expects to render CardList Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com"
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})