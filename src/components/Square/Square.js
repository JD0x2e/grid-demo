import { Component } from "react";
import "./Square.css";

class Square extends Component {
  render() {
    return <div className="square">{this.props.value}</div>;
  }
}

export default Square;
