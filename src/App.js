import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Profiles } from "./components/Profiles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("./dinosaurs.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles">
              <Profiles data={this.state.data} />
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
