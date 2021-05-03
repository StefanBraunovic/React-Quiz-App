import './App.css';
import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Start from './components/Start';
import End from './components/End';
import { quizdata } from './data/quiz.js';

let interval;
const questions = quizdata.slice(0, 10);
const App = () => {
	const [step, setStep] = useState(1);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [answers, setAsnwers] = useState([]);
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (step === 3) {
			clearInterval(interval);
		}
	}, [step]);

	const quizStartHandler = () => {
		setStep(2);
		interval = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	};

	const resetClickHandler = () => {
		window.location.reload();
	};

	return (
		<div className="App">
			{step === 1 && <Start onQuizStart={quizStartHandler} />}
			{step === 2 && (
				<Question
					data={questions[activeQuestion]}
					onAnswerUpdate={setAsnwers}
					numberOfQuestions={questions.length}
					activeQuestion={activeQuestion}
					onSetActiveQuestions={setActiveQuestion}
					onSetStep={setStep}
					onReset={resetClickHandler}
					time={time}
					results={answers}
				/>
			)}

			{step === 3 && (
				<End
					results={answers}
					data={quizdata}
					onReset={resetClickHandler}
					onAnswersCheck={() => {}}
					time={time}
				/>
			)}
		</div>
	);
};

export default App;
