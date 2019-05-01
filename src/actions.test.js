import * as actions from "./actions";
import * as types from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware])

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "woo";
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe("requestRobots", () => {
  it("should create a Pending action on requestRobots", () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots())
    const action = store.getActions();
    const expectedAction = {
      type: types.REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction)
  })
})