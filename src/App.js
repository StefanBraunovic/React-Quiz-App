import './App.css';
import React, { useState } from 'react';
import Question from './components/Question';
import Start from './components/Start';
import _ from 'lodash';
import { quizdata } from './data/quiz.js';

const randomQuestions = _.shuffle(quizdata)
	.slice(0, 10)
	.map((question) => {
		quizdata.choices = _.shuffle(question.choices);
		return question;
	});

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
					data={randomQuestions[activeQuestion]}
					onAnswerUpdate={setAsnwers}
					numberOfQuestions={quizdata.length}
					activeQuestion={activeQuestion}
					onSetActiveQuestions={setActiveQuestion}
					onSetStep={setStep}
				/>
			)}
		</div>
	);
};

export default App;
