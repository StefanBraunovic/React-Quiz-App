import React, {useState, useEffect, useRef} from 'react';

import { formatTime } from '../../functions/functions';
import './Question.css';


const Question = ({results,data, onAnswerUpdate,numberOfQuestions,activeQuestion, onSetActiveQuestions,onSetStep,onReset,time,})=>{
    const [selected,setSelected]=useState('');
    const [error,setError]= useState('');
    const radiosWrapper = useRef();
    const [correct,setCorrect]=useState('')
    const [uncorrect,setUnCorrect]=useState()
  
   

    useEffect(()=>{
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput){
            findCheckedInput.checked=false;
        }
    }, [data]);

    const changeHandler = (e) =>{
        // let correct =0;
        // let uncorrect = 0;
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
    
        <div className="question">
        <p><strong>Your time:</strong> {formatTime(time)}</p>
        <p>{correct}</p>
        
       
            <h2>{data.question}</h2>
            <div className="answers" ref={radiosWrapper}>
                
                {data.choices.map((choice,i)=>(
                    <label>
                    <input
                  
                     type="radio"  name="answer" value={choice}  onChange={changeHandler}/>
                    {choice}
                </label>
                ))}
            </div>
            {error&& <div>{error}</div>}
           

            <button onClick={nextClickHandler}>Next</button>
            <button className="quit" onClick={onReset}>Quit</button>
           
        </div>
    </div >

</div>

    );
}

export default Question;