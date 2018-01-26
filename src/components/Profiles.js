import React, { Component } from 'react';
import {SkillsList} from "./SkillsList";

const numbers = [1,2,3];


export class Profiles extends Component {
  clickHandler(event) {
    if (event.target.parentNode.classList.contains("profile-header")) {
      event.target.parentNode.parentNode.childNodes[1].classList.toggle(
        "hidden"
      );
    }
  }
  render() {
    return this.props.data.map(item => {
      return (
        <li className="profile-card" onClick={this.clickHandler}>
          <header className="profile-header">
            <img src={item.image} />
            <h2>{item.name}</h2>
          </header>
          <section className="skills-container hidden">
            <h4>Skills</h4>
            <ul className="skills-list">
              <SkillsList key={item} item={item} />
            </ul>
          </section>
        </li>
      );
    });
  }
}
