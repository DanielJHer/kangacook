import React from "react";
import '../styles.css';

export default function Header(){

    return(
        <div className="header">
            <img className="logo" src="kangacook_icon.png" alt="kangacook"/>
            <h2 className="app-subtitle">Save your favorite recipes here!</h2>
        </div>

    )
}