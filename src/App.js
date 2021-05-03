import './App.css';
import React, { useState } from 'react';
import Question from './components/Question';
import Start from './components/Start';
import quizData from './data/quiz.json';

const App = () => {
	const [step, setStep] = useState(1);
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [answers, setAsnwers] = useState([]);

	const quizStartHandler = () => {
		setStep(2);
	};

	return (
		<div className="App">
			{step === 1 && <Start onQuizStart={quizStartHandler} />}
			{step === 2 && (
				<Question
					data={quizData.data[activeQuestion]}
					onAnswerUpdate={setAsnwers}
					numberOfQuestions={quizData.data.length}
					activeQuestion={activeQuestion}
					onSetActiveQuestions={setActiveQuestion}
					onSetStep={setStep}
				/>
			)}
		</div>
	);
};

export default App;
