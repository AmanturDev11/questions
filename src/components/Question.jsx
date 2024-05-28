// import propTypes from "prop-types";
// import styled from "styled-components";

// const Question = ({ answerText, isCorrect, handlerAnswerOption }) => {
// 	return (
// 		<AnswerOptionButton onClick={() => handlerAnswerOption(isCorrect)}>
// 			{answerText}
// 		</AnswerOptionButton>
// 	);
// };

// export default Question;

// const AnswerOptionButton = styled.button`
// 	width: 100%;
// 	font-size: 16px;
// 	color: #ffffff;
// 	background-color: #252d4a;
// 	border-radius: 15px;
// 	display: flex;
// 	padding: 5px;
// 	justify-content: flex-start;
// 	align-items: center;
// 	border: 5px solid #234668;
// 	cursor: pointer;
// `;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Question = ({ answerText, isCorrect, handlerAnswerOption }) => {
	return (
		<AnswerOptionButton onClick={() => handlerAnswerOption(isCorrect)}>
			{answerText}
		</AnswerOptionButton>
	);
};

Question.propTypes = {
	answerText: PropTypes.string.isRequired,
	isCorrect: PropTypes.bool.isRequired,
	handlerAnswerOption: PropTypes.func.isRequired,
};

export default Question;

const AnswerOptionButton = styled.button`
	width: 100%;
	font-size: 16px;
	color: #ffffff;
	background-color: #252d4a;
	border-radius: 15px;
	display: flex;
	padding: 5px;
	justify-content: flex-start;
	align-items: center;
	border: 5px solid #234668;
	cursor: pointer;
`;
