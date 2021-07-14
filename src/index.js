//https://www.youtube.com/watch?v=Y0-qdp-XBJg&t=48s
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {LandingPage} from "./landing.page"
import { AppLayout } from './app.layout'
import { ProtectedRoute } from './protected.route'

import "./styles.css"
function App() {
    return (
        <div>
           
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <ProtectedRoute 
                    exact 
                    path="/app" 
                    component={AppLayout}
                />
                <Route path="*" component={()=>"404 NOT FOUND"}/>
            </Switch>
        </div>
    )
}

const root = document.querySelector("#root")

ReactDOM.render(
    <Router>
        <App/>
    </Router>,root)