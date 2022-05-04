import React from "react";
import logo from "./troll-face.png"

export default function Header(){
    return(
        <div className="divHeader">
            <img className="imgHeader" alt="troll" src={logo} />
            <h2 className="h2Header">Meme Generator</h2>
            <h4 className="h4Header">React Project </h4>
        </div>
    )
}