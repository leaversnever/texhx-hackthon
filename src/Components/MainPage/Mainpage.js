import React from 'react';
import {Link} from '@reach/router';


export default function Mainpage() {
    return(
        <div className="container">
            <div className="container-row">
                <div className="Box"><Link to='storage'>Storage</Link></div>
                <div className="Box"><Link to='menu'>Menu</Link></div>
            </div>
            <div className="container-row">
                <div className="Box"><Link to='health'>Health</Link></div>
                <div className="Box"><Link to='mine'>Mine</Link></div>
            </div>
        </div>
    )
}