import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Route, Switch } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

class App extends Component {
    render() {
        return (
            <>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" >
                            <Switch location={location}>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route exact path="/" component={Home}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </>
        );
    }
}

export default App