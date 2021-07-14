import React from 'react'
import auth from "./auth"

export function LandingPage(props) {
    return (
        <div>
            <h2>Landing Page</h2>
            <button 
            onClick={
                ()=>{
                    auth.login(()=>{
                        props.history.push("/app")
                    })
                }
            }>Login</button>
        </div>
    )
}
