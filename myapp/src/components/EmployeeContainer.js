import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    employees: [],
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees("");
  }

  searchEmployees = query => {
    API.search(query)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div classname="App">
        <SiteHead />
        {this.state.employees.length > 0 &&
        <Navbar emplyees={this.state.employees} />}

      </div>

    );
  }
}

export default EmployeeContainer;
