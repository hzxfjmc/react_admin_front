import React, { Component } from 'react';
import {HashRouter, Route, BrowserRouter as Router, Switch,Link} from 'react-router-dom';
import Home from '../view/home';
import About from '../view/about';
import HighComponent from "../view/highComponent";
import Parent from "../view/parent/index"

import Layout from "../componets/Layout"



class Maprouter extends Component{
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/topics'>主题列表</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/HighComponent" component={HighComponent} />
                    <Route path="/Parent" component={Parent} />
                </div>
            </Router>
        );
      }
}
// const BasicRoute = () => (
//     <HashRouter>
//         <Switch>
//             <Route path="/" component={Layout}>
//                 <Route exact path="/" component={Home}/>
//                 <Route exact path="/about" component={About}/>
//                 <Route exact path="/highComponent" component={HighComponent}/>
//             </Route>
//         </Switch>
//     </HashRouter>
// );


export default Maprouter;