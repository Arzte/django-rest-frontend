import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then((response) => response.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h3>Shoe List</h3>
        <ul>
          {this.state.shoes.map((shoe) => (
            <li key={shoe.id}>
              <ul>
                <li>
                  <b>Size:</b> {shoe.size}
                </li>
                <li>
                  <b>Brand Name:</b> {shoe.brand_name}
                </li>
                <li>
                  <b>Manufacturer:</b> {shoe.manufacturer}
                </li>
                <li>
                  <b>Color:</b> {shoe.color}
                </li>
                <li>
                  <b>Material:</b> {shoe.material}
                </li>
                <li>
                  <b>Shoe Type:</b> {shoe.shoe_type}
                </li>
                <li>
                  <b>Fasten Type:</b> {shoe.fasten_type}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
