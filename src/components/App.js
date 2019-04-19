import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </>
        );
    }
}

export default App