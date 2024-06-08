import './Navbar.css'
import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {

    const changeTheme = (event) => {
        document.activeElement.blur();
    }

    return (
        <nav className={"navbar"}>
            <div className={"links"}>
                <Link to={"/website"}>Home</Link>
                <Link to={"/projects"}>Projects</Link>
                {/*<Link to={"/"}>Resumé</Link>*/}
            </div>
            <div className={"themes"}>
                <select onChange={changeTheme}>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto</option>
                    <option>Celestial</option>
                    <option>Ghibli</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar