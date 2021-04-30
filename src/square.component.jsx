import React from "react";
import "./square.styles.css";

class Square extends React.Component {
  render() {
    const { grey, leftPosition, topPosition, handleClick, id } = this.props;

    return (
      <div
        className="square"
        style={{
          background: grey ? "grey" : "black",
          left: `${leftPosition}px`,
          top: `${topPosition}px`,
        }}
        onClick={handleClick}
        data-id={id}
      ></div>
    );
  }
}
export default Square;
