// import React from "react";
// import Question from "./Question";
// import styled from "styled-components";

// const Quiz = ({ questions, currentQuestion }) => {
// 	return (
// 		<>
// 			<QuestionContainer>
// 				<QuestionCount>
// 					<span>Question {currentQuestion + 1}</span> / {questions.length}
// 					<QuestionText>{}</QuestionText>
// 				</QuestionCount>
// 			</QuestionContainer>
// 			{questions[currentQuestion].map((item) => (
// 				<Question key={item.id} {...item} />
// 			))}
// 		</>
// 	);
// };

// export default Quiz;

// const QuestionContainer = styled.div`
// 	width: 100%;
// 	position: relative;
// `;

// const QuestionCount = styled.div`
// 	margin-bottom: 20px;
// `;

// const QuestionText = styled.div`
// 	margin-bottom: 12px;
// `;

// const AnswerOptionsContainer = styled.div`
// 	width: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// `;

import React from "react";
import Question from "./Question";
import styled from "styled-components";
import PropTypes from "prop-types";

const Quiz = ({ questions, currentQuestion, handlerAnswerOption }) => {
	return (
		<>
			<QuestionContainer>
				<QuestionCount>
					<span>Question {currentQuestion + 1}</span> / {questions.length}
				</QuestionCount>
				<QuestionText>{questions[currentQuestion].questionText}</QuestionText>
			</QuestionContainer>
			<AnswerOptionsContainer>
				{questions[currentQuestion].answerOptions.map((item) => (
					<Question
						key={item.id}
						{...item}
						handlerAnswerOption={handlerAnswerOption}
					/>
				))}
			</AnswerOptionsContainer>
		</>
	);
};

Quiz.propTypes = {
	questions: PropTypes.array.isRequired,
	currentQuestion: PropTypes.number.isRequired,
	handlerAnswerOption: PropTypes.func.isRequired,
};

export default Quiz;

const QuestionContainer = styled.div`
	width: 100%;
	position: relative;
`;

const QuestionCount = styled.div`
	margin-bottom: 20px;
`;

const QuestionText = styled.div`
	margin-bottom: 12px;
`;

const AnswerOptionsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
