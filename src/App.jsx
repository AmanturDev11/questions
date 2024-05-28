import styled from "styled-components";
import QuizzApp from "./components/QuizzApp";

const App = () => <QuizzApp />;

export default App;

const AppContainer = styled.div`
	position: relative;
`;

const BackgroundVideo = styled.video`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
