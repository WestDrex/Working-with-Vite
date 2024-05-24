import React from "react";
//import 'reactjs-icon.png';
import iconz from '../Components/Images/iconz.png';

export default function Navbar(){
    return(
        <nav>
           <img src={iconz} alt="reactjs-icon" />
           <h4>ReactFacts</h4>
           <h3>React Course - Project 1</h3>

        </nav>
        
    )
}