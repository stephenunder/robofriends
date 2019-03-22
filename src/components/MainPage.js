import "./MainPage.css";

import React, { Component } from "react";

import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending, robots } = this.props;
      return isPending ?
      <h1 className="tc">Loading</h1> :
      (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default MainPage;