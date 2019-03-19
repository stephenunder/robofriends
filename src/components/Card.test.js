import { mount, render, shallow } from "enzyme";

import Card from "./Card";
import React from "react";

it("expect to render Card Component", () => {
  expect(shallow(<Card />).length).toEqual(1)
})