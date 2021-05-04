import './App.css';
import React, { useState, useEffect } from 'react';
import Question from './components/Question/Question';
import Start from './components/Start/Start';
import End from './components/End/End';
import { quizdata } from './data/quiz.js';
import shuffle from 'shuffle-array';
import Modal from './components/Modal';

let interval;
const questions = quizdata.slice(0, 10);
shuffle(questions);

const App = () => {
	const [step, setStep] = useState(1);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [answers, setAsnwers] = useState([]);
	const [time, setTime] = useState(0);
	const [showModal, setShowModal] = useState(false);

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
					data={questions}
					onReset={resetClickHandler}
					onAnswersCheck={() => setShowModal(true)}
					time={time}
				/>
			)}

			{showModal && (
				<Modal
					onClose={() => setShowModal(false)}
					results={answers}
					data={questions}
				/>
			)}
		</div>
	);
};

export default App;
