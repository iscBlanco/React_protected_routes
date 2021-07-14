//https://www.youtube.com/watch?v=Y0-qdp-XBJg&t=48s
import React from 'react'
import ReactDOM from 'react-dom'
import {LandingPage} from "./landing.page"

import "./styles.css"
function App() {
    return (
        <div>
            <h1>Protected React Routes</h1>
            <LandingPage/>
        </div>
    )
}

const root = document.querySelector("#root")

ReactDOM.render(<App/>,root)