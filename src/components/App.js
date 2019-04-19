import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import {BrowserRouter as Router, Route, Link, Switch, HashRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </>
        );
    }
}

export default App