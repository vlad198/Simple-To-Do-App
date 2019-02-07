import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <div className="mx-auto">
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="reset"
              required
              onChange={this.props.handleChange}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary">Add</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
