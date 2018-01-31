import React from "react";

export class SkillList extends React.Component {
  render() {
    return this.props.item.skills.map(skill => {
      return <li key={skill}>{skill}</li>;
    });
  }
}
