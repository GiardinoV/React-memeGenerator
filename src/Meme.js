import React from "react";

export default function Meme(){
    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="formInput"
                />                    
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="formInput"
                />
                <button className="formButton">Get a new meme image 🖼</button>
            </form>
        </main>
    )
}