import React from 'react'
import auth from './auth'

export function AppLayout(props) {
    return (
        <div>
            <h1>App Layout </h1>
            <button onClick={
                ()=>{
                    auth.logout(()=>{
                        props.history.push("/")
                    })
                }
            }>Logout</button>
        </div>
    )
}
