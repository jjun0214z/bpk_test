import React, { Component } from "react";
import Card from "./presenter";

class Container extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("./json/data.json")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;
    return <Card data={data} />;
  }
}

export default Container;
