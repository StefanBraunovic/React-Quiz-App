import React, {useState, useEffect, useRef} from 'react';

import { formatTime} from '../functions/functions';







const Question = ({data, onAnswerUpdate,numberOfQuestions,activeQuestion, onSetActiveQuestions,onSetStep,onReset,time,})=>{
    const [selected,setSelected]=useState('');
    const [error,setError]= useState('');
    const radiosWrapper = useRef();


   

    useEffect(()=>{
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput){
            findCheckedInput.checked=false;
        }
    }, [data]);

    const changeHandler = (e) =>{
        setSelected(e.target.value);
        if(error){
            setError('')
        }
    }


    const nextClickHandler= (e) => {
          if(selected === '') {
        return setError('Please select one option!')
            }
        onAnswerUpdate(prevState=>[...prevState,{ q:data.question, a:selected}]);
        setSelected('');
        if(activeQuestion <numberOfQuestions -1){
            onSetActiveQuestions(activeQuestion +1)
        }else{
            onSetStep(3);
        }
    }
   

    return(
<div>
    <div>
    
        <div>
        <p><strong>Your time:</strong> {formatTime(time)}</p>
        <p>{activeQuestion+1}</p>
      <p>{numberOfQuestions}</p>
            <h2>{data.question}</h2>
            <div ref={radiosWrapper}>
                
                {data.choices.map((choice,i)=>(
                    <label  key={i}>
                    <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                    {choice}
                </label>
                ))}
            </div>
            {error&& <div>{error}</div>}
            <button onClick={nextClickHandler}>Next</button>
            <button className="button is-success" onClick={onReset}>Quit</button>
        </div>
    </div >

</div>

    );
}

export default Question;