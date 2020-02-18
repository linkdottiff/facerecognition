import React from 'react';
import "./InputImageURL.css";

const InputImageURL = ({onInputChange, onClickInput}) => {
    return (
        <div>
            <div className="f4 center white pa3">
                        {`The magic AI will detect if there's a face in your picture. Give it a try!`}
            </div>
            <div className="center pattern w-90 pa4 br3">
                        <input 
                        className="input-reset ba b--black-20 pa2 mb2 db w-70" 
                        type="text" 
                        placeholder="Enter image url"
                        onChange={onInputChange}
                        />
                        <button 
                        className="grow w-30 f6 link ba mb2 dib bg-dark-green pointer white" 
                        type="submit"
                        onClick={onClickInput}
                        >
                        Detect
                        </button>
            </div>
        </div>
        
    );
}

export default InputImageURL;