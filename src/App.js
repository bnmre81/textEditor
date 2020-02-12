import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    textColor: "black",
    bold: false,
    italic: false,
    underline: false
  };

  changeColor = newColor => {
    this.setState({ textColor: newColor });
  };
  changeStyle = style => {
    this.setState({ [style]: !this.state[style] });
  };

  render() {
    const stylingBoxes = stylings.map(style => (
      <button
        onClick={() => this.changeStyle(style)}
        className="btn btn-light"
        style={styles[style]}
        key={style}
      >
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => (
      <button
        onClick={() => this.changeColor(color)}
        style={{ backgroundColor: color, height: 30, width: 30 }}
        key={color}
      />
    ));

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.textColor,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
