import React from "react";
import { useNavigate } from 'react-router-dom';

const Notfound = () =>{
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("/")
    }
    return (
        <>
    <h1>abi you mis road</h1>
    <p>
        <button >click mee to back</button>
    </p>
        </>
    )
}

export default  Notfound