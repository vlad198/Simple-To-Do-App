import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.data.map((item, index) => (
            <li className="list-group-item text-center" key={index}>
              {item}
              <span style={{ float: "right", cursor: "pointer" }}>
                <Link to={`/edit/${index}`}>
                  <i className="fas fa-pencil-alt" />{" "}
                </Link>
                <i
                  onClick={this.props.deleteClickHandler}
                  id={index}
                  style={{ color: "red" }}
                  className="fas fa-times"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
