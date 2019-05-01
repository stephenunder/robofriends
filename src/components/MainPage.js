import "./MainPage.css";

import React, { Component } from "react";

import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

export class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;