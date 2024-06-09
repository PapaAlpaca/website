import React from 'react';
import "../css/styles.css";
import {useNavigate} from "react-router-dom";

function ProjTile(props) {
    const navigate = useNavigate()
    return (
        <div className={"tile"} onClick={() => navigate(props.url)}>
            <div className={"image"}>
                <img src={props.img} alt={"icon"}/>
            </div>
            <div className={"content"}>
                <text className={"title"}>{props.title}</text>
                <text className={"subtitle"}>{props.subtitle}</text>
                <text className={"description"}>{props.description}</text>
            </div>
        </div>
    );
}

export default ProjTile