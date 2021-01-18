import React from "react";
import "./index.css";
import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutBar(){
    
    const { logout } =  useAuth0();

    return(
        <div className="logout-holder">
            <button id="logout-button" onClick={logout}>
                Log Out
            </button>
        </div>
    );
}