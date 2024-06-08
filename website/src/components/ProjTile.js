import React from 'react';
import "./ProjTile.css";

const goTo = () => {

}

function ProjTile(props) {
    return (
        <div className={"tile"}>
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