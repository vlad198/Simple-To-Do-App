import React, { Component } from "react";
import Add from "./components/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Edit from "./components/Edit";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ["something", "something else"],
      name: "",
      update: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const newItm = this.state.name;
    const newData = this.state.data;

    newData.push(newItm);

    this.setState({
      data: newData
    });
    const inp = document.getElementById("reset");
    inp.value = "";
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteItem = e => {
    const indexElement = parseInt(e.target.id);

    this.setState({
      data: this.state.data.filter((item, index) => {
        return index !== indexElement;
      })
    });
  };

  onEdit = (e, id) => {
    e.preventDefault();
    const newArr = this.state.data;
    newArr[id] = this.state.update;
    this.setState({
      data: newArr
    });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <h1>To do app</h1>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <div>
                  <Add
                    {...props}
                    handleSubmit={this.onSubmit}
                    handleChange={this.onChange}
                  />
                  <List
                    {...props}
                    data={this.state.data}
                    deleteClickHandler={this.deleteItem}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/edit/:id"
              render={props => (
                <Edit
                  {...props}
                  handleChange={this.onChange}
                  data={this.state.data}
                  editHandler={this.onEdit}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
