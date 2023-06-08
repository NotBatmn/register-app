import React from "react";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export const Dashboard = (props) => {
     
    // resize confetti with window size
    const { width, height } = useWindowSize()

    return(
    <>
    {/* display confetti */}
    <ReactConfetti
        width={width}
        height={height}

    />
    {/* display login congrationations */}
    <h1>Congratulations!!!</h1>
    <h2>You Logged In! </h2>
    {/* display button back to login / register */}
    <button onClick={() => {props.onFormSwitch('login');}}>Back to Login</button>
    </>  

    )
}