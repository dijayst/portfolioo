import React from 'react'
import {useNavigate} from "react-router-dom";

const Auth = ({authenticate}) => {
    const navigate=useNavigate();

    const change=()=>{
        authenticate();
        navigate("/Login")
    }

    return (
        <div>
            please auth to  continue
            <button onClick={change}>login o</button>
        </div>
    )
}

export default Auth
