import React from 'react';
import './Start.css';

const Start = ({onQuizStart})=>{
    return (
        <div className="start-card">
            <div>
                <div className="content">
                    <h4>This Marvel Quiz About The Avengers Movies</h4>
                    <p>Can You Pass?</p>
                    <button className="start" onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start