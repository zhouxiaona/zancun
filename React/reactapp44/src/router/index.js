import React, {Component} from 'react'
import {Route, Switch, withRouter, BrowserRouter as Router} from 'react-router-dom'
import {
    Index,
    Profile,
    NoFound
} from './router'

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Profile} exact/>
                    <Route path="/profile" component={Index}/>
                    <Route component={NoFound}/>
                </Switch>
            </Router>
        )
    }
}

export default Routers