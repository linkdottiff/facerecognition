import React from 'react';
import Tilt from 'react-tilt';
import brain from './ai.png';

const Logo = () => {
    return (
        <Tilt className="Tilt shadow-5 pa3 ma3 bg-silver" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner"> 
               <img alt="brain" src={brain}></img>
            </div>
        </Tilt>
    );
}

export default Logo;