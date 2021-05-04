import React from 'react';
import './Start.css';

const Start = ({onQuizStart})=>{
    return (
        <div className="start-card">
            <div>
                <div>
                    <h4>This Marvel Quiz About The Avengers Movies Gets Increasingly Difficult — Can You Pass?</h4>
                    <p>Good luck!</p>
                    <button className="start" onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start