import React from "react";
import "./App.css";
import Square from "./square.component";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { squares: [] };
  }

  componentDidMount() {
    if (this.state.squares.length !== 0) return;
    const squaresArray = this.state.squares;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        squaresArray.push({
          id: `${x}${y}`,
          grey: true,
          leftPosition: Math.floor(x * 50),
          topPosition: Math.floor(y * 50),
        });
      }
    }
    this.setState({ squares: squaresArray });
  }

  handleClick = (e) => {
    // Convert string id to int array
    const clickedId = e.target.dataset.id.split("").map((x) => +x);

    const topSquareId = `${clickedId[0]}${clickedId[1] - 1}`;
    const botSquareId = `${clickedId[0]}${clickedId[1] + 1}`;
    const leftSquareId = `${clickedId[0] - 1}${clickedId[1]}`;
    const rightSquareId = `${clickedId[0] + 1}${clickedId[1]}`;

    console.log(topSquareId);
    console.log(botSquareId);
    console.log(leftSquareId);
    console.log(rightSquareId);

    const adjacentSquareIds = [
      topSquareId,
      botSquareId,
      leftSquareId,
      rightSquareId,
    ];
    const squaresArray = this.state.squares;

    adjacentSquareIds.forEach((squareId) => {
      const squareObj = squaresArray.find((obj) => obj.id === squareId);
      console.log(squareObj);
      if (squareObj) {
        squareObj.grey = !squareObj.grey;
      }
    });

    this.setState({ squares: squaresArray });
  };

  render() {
    return (
      <div>
        {this.state.squares.map(({ id, ...otherProps }) => (
          <Square
            handleClick={(e) => this.handleClick(e)}
            key={id}
            id={id}
            {...otherProps}
          />
        ))}
      </div>
    );
  }
}

export default Grid;
