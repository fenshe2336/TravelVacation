import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Bookings from "./bookings";
import Contact from "./contact";
import Destinations from "./destinations";
import ThingsToDo from "./Thingstodo";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Theme Vacation</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Bookings">Bookings</NavLink></li>
            <li><NavLink to="/Destinations">Destinations</NavLink></li>
            <li><NavLink to="/Thingstodo">ThingsToDo</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/Bookings" component={Bookings}/>
             <Route path="/Destinations" component={Destinations}/>
             <Route path="/ThingsToDo" component={ThingsToDo}/>
             <Route path="/Contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;