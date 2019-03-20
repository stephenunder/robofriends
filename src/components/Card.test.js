import Card from "./Card";
import React from "react";
import { shallow } from "enzyme";

it("expects to render Card Component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})