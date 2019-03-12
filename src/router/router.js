import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from '../view/home';
import About from '../view/about';
import HighComponent from "../view/highComponent";
import Parent from "../view/parent/index"

// import Layout from "../componets/Layout"

export default class Maprouter extends Component{
    state = {
        collapsed: false,
      };
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/:id" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/HighComponent" component={HighComponent} />
                    <Route path="/Parent" component={Parent} />
                </div>
            </Router>
        );
      }
}
;