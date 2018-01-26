import React, { Component } from 'react';
const numbers = [1,2,3];

export class SkillsList extends Component{
  render(){
    return(
      this.props.item.skills.map(skill => {
        return <li key={skill}>{skill}</li>
      })
    )
  }
}
