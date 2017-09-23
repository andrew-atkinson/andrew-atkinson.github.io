import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>



        <div id="content">
          <h2 className="text" style={{
            backgroundImage: 'url(img/nimbus.jpg)',
            WebkitBackgroundClip: 'text'
          }}>
            NIMBUS, INC
          </h2>
          <div className="box" style={{
            backgroundImage: 'url(img/nimbus.jpg)',
            color: 'white'
          }}>
            <div className="container">
              <div className="text-body">
                <p>
                  A hypothetical e-commerce site selling unusual weather
                </p>
                <p>
                  PostgreSQL maintains ‘inventory’ with Sequelize and Express, 
                  Node serves the project with React, 
                  Redux and Bootstrap giving a seamless user experience, 
                  with OAuth and sessions providing authentication. 
                  Created db schemas, 
                  Express routes for products, 
                  front-end through bootstrap,
                  and managed the project through git and Waffle.io
                </p>
              </div>
              <div className="link">
                <p>
                  <a href="https://github.com/nimbusInc/cloudslanger"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-fw fa-github fa-2x">
                    </i>
                    source
                  </a>
                  <a href="https://nimbus-inc.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-fw fa-external-link fa-2x" aria-hidden="true">
                    </i>
                    deploy
                  </a>
                </p>
              </div>
            </div >
          </div >
        </div >


        
        <div className="vertical">
          Andrew Atkinson Projects
        </div>
      </div >
    );
  }
}

export default App;