import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import ProtectedRoute from './pages/ProtectedRoute'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'

export default function App() {
    const [isAuth, setIsAuth] = React.useState(false)
    return(
        <Router>
            <Switch>
            <Route exact path="/">
                {(!isAuth)
                ?<button onClick={()=>{setIsAuth(true)}} >Login</button>
                :<button onClick={()=>{setIsAuth(false)}} >Logout</button>
                }
                {/* <button onClick={()=>{setIsAuth(false)}}>Logout</button> */}
                <Link to="/profile">Go to profile</Link>
              
            </Route>
            {/* <Route path="/appointment">
                <Appointment/>
            </Route>
           */}
            <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth}/>
                
            <ProtectedRoute path="/appointment" component={Appointment} isAuth={isAuth}/>
            </Switch>
            
           
        </Router>
    ) 
}
