import CounterButton from "./CounterButton";
import React from "react";
import { shallow } from "enzyme";

it("expects to render CounterButton Component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
})

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  expect(wrapper.props().color).toEqual("red");
})