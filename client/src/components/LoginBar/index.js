import React from "react";
import "./index.css";
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginBar(){
    
    const { loginWithRedirect } =  useAuth0();

    return(
        <div className="login-holder">
            <button id="login-button" onClick={loginWithRedirect}>
                Log In
            </button>
        </div>
    );
}