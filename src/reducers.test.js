import * as reducers from "./reducers";
import * as types from "./constants";

describe("searchRobots reducer", () => {
  const initialStateSearch = {
    searchField: ""
  }
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ""})
  })

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: types.CHANGE_SEARCH_FIELD,
      payload: "abc"
    })).toEqual({
      searchField: "abc"
    })
  })
})

describe("requestRobots reducer", () => {
  const initialStateRobots = {
    robots: [],
    isPending: true,
    error: ""
  }
  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it("should handle REQUESTS_ROBOTS_PENDING action", () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: types.REQUEST_ROBOTS_PENDING
    })).toEqual({
      robots: [],
      isPending: true,
      error: ""
    })
  })

  it("should handle REQUESTS_ROBOTS_SUCCESS action", () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: types.REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: "123",
        name: "test",
        email: "test@gmail.com"
      }]
    })).toEqual({
      robots: [{
        id: "123",
        name: "test",
        email: "test@gmail.com"
      }],
      isPending: false,
      error: ""
    })
  })

  it("should handle REQUESTS_ROBOTS_FAILED action", () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: types.REQUEST_ROBOTS_FAILED,
      payload: "Noo!"
    })).toEqual({
      robots: [],
      isPending: true,
      error: "Noo!"
    })
  })
})