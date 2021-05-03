import React from 'react';


const Start = ({onQuizStart})=>{
    return (
        <div>
            <div>
                <div>
                    <h1>Start</h1>
                    <p>Good luck!</p>
                    <button onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Start