import React from "react";
import logo from "./troll-face.png"

export default function Header(){
    return(
        <header className="header">
            <img className="header--image" alt="troll" src={logo} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project </h4>
            </header>
    )
}