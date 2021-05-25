import React from 'react';
import { Link } from "react-router-dom";
import "../styles/landing.css";

const LandingPage = () => {
    return (
        <div className="landingHeader">
            <h4 className="text-center welcome">Welcome to My Task Manager App</h4>
            <div className="landingFlex mt-4">
                <div>
                    <Link to="/signup" className="myLink">Signup</Link>
                </div>
                <div>
                    <Link to="/login" className="myLink">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
