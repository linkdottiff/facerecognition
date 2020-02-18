import React from 'react';
import "./FaceDetection.css";

const FaceDetection = ({url, box}) => {
    return (
        <div className="center">
            <div className="absolute mt2 mb2">
            <img 
            src={url}
            alt=""
            id="inputImage"
            >
            </img>
            {box.map(data =>{
                return (
                    <div 
                        className="bounding-box"
                        key={data.id}
                        style={
                        {
                        top: data.topRow, 
                        bottom: data.bottomRow, 
                        right: data.rightCol,
                        left: data.leftCol
                        }
                        }>
                    </div>
                )
            })}
            
            </div>
        </div>
    );
}

export default FaceDetection;