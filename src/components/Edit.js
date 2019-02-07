import React, { Component } from "react";

export default class Edit extends Component {
  render() {
    const userId = this.props.match.params.id;

    return (
      <div>
        <form
          onSubmit={e => {
            this.props.editHandler(e, userId);
            this.props.history.push("/");
          }}
        >
          <div className="input-group">
            <input
              type="text"
              name="update"
              required
              onChange={this.props.handleChange}
              className="form-control"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-primary">Update</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
