import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkillsList from './SkillsList/skillsList.js'
import DegreeHistory from './DegreeHistory/degreeHistory.js'
import WorkHistory from './WorkHistory/workHistory.js'


class App extends Component {
  render() {
    // this.props
    return (
      <div>
        <SkillsList skill = {this.props.skills} />
        <DegreeHistory edu = {this.props.edu} />
        <WorkHistory job = {this.props.job} />
      </div>
    );
  }
}

export default App;
