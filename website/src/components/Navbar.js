import './Navbar.css'
import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={"navbar"}>
            <Link to={"/website"}>Home</Link>
            <Link to={"/projects"}>Projects</Link>
            {/*<Link to={"/"}>Resumé</Link>*/}
        </nav>
    )
}

export default Navbar