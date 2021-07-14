import React from 'react'
import { withRouter, Link } from "react-router-dom"

function Profile() {
    return (
        <div>
           <h1>If you see this, it means you are authenticated.</h1> 
           <ul>
               <il>
                   <Link to="/appointment">Appointments</Link>
               </il>
               <il>
                   <Link></Link>
               </il>
               <il>
                   <Link></Link>
               </il>
           </ul>
        </div>
    )
}

export default withRouter(Profile);
