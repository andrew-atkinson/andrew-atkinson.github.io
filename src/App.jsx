import React, { Component } from 'react';
import './index.css';
import Project from './Project';
import state from './state'

class App extends Component {
  constructor() {
    super()
    this.state = state
  }

  render() {
    return (
      <div>
        <div id="content">
          {
           this.state.sections.map(section =>
              (
                <Project  image={section.image}
                          color={section.color}
                          title={section.title}
                          body={section.body}
                          links={section.links} />
              )
            )
          }
        </div >
        <div className="title">
          {this.state.title}
        </div>
      </div >
    );
  }
}

export default App;