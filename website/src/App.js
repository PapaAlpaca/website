import React from 'react'
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Projects from "./components/Projects";
import {Home} from "./components/Home";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"projects"} element={<Projects />} />
            </Routes>
        </>
        // <Router>
        //     <Navbar />
        //     {/*<Routes>*/}
        //     {/*    <Route exact path="/" element={<Home />}/>*/}
        //     {/*</Routes>*/}
        // </Router>
        // <>
        //     <Navbar className={"navbar"}/>
        //     <div className={"content"}>
        //         {/*<button className={"projects"} onClick={() => {alert("projects")}}>Projects</button>*/}
        //         <Planet title={"Projects"} top={"30vh"} left={"40vw"}/>
        //     </div>
        // </>
    );
}

export default App;
