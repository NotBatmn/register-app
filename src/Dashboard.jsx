import React from "react";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export const Dashboard = (props) => {

    // const Confetti = () => {
    //     const [windowDimension ,setDimension] = useState({
    //         width: window.innerWidth, 
    //         height: window.innerHeight });
    // }

    // const detectSize = () => {
    //     setDimension({
    //         width: window.innerWidth,
    //         height: window.innerHeight
    //     });
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', detectSize);
    //     return() => {
    //         window.removeEventListener('resize', detectSize);
    //     }
    // }, [windowDimension]);

    return(
    <>
    <ReactConfetti
        width={1600}
        height={1600}
    />
    <h1>Congratulations!!!</h1>
    <h2>You Logged In! </h2>
    <button onClick={() => {props.onFormSwitch('login');}}>Back to Login</button>
    </>  

    )
}