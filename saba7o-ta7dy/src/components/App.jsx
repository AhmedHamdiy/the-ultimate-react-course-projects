import { act, useReducer } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import StartScreen from "./screens/StartScreen";
import PlayersScreen from "./screens/PlayersScreen.jsx";
import LoaderScreen from "./screens/LoaderScreen";
import ErrorScreen from "./screens/ErrorScreen";
import QuestionScreen from "./screens/QuestionScreen";
import FinalScreen from "./screens/FinalScreen";
const SECONDS_PER_QUESTION = 30;
// loading, start, steady, ready, error, active, finished
const initialState = {
  status: "start",
  players: [],
  selectedPlayer: null,
  questions: [],
  answers: [],
  index: 0,
  points: 0,
  highscore: localStorage.getItem("highscore") || 0,
  secondsRemaining: 0,
  errorMsg: null,
  maxPoints: 0,
};
function reducer(state, action) {
  const {
    status,
    players,
    selectedPlayer,
    questions,
    answers,
    index,
    points,
    highscore,
    secondsRemaining,
    errorMsg,
    maxPoints,
  } = state;
  switch (action.type) {
    case "dataLoading":
      return { ...state, status: "loading", errorMsg: null };
    case "dataFetched":
      return {
        ...state,
        errorMsg: null,
        status: "ready",
        players: action.payload,
      };
    case "dataFailed":
      return { ...state, status: "error", errorMsg: action.payload };
    case "selectingPlayer":
      return { ...state, selectedPlayer: action.payload };
    case "start":
      return {
        ...state,
        status: "active",
        errorMsg: null,
        questions: selectedPlayer.questions,
        maxPoints: selectedPlayer.questions.reduce(
          (prev, cur) => cur.points + prev,
          0
        ),
        highscore:
          localStorage.getItem(`highscore-${selectedPlayer.name}`) || 0,
        secondsRemaining:
          selectedPlayer.questions.length * SECONDS_PER_QUESTION,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: secondsRemaining - 1,
        status: secondsRemaining === 0 ? "finished" : state.status,
      };
    case "newAnswer":
      return {
        ...state,
        answers: [...answers, action.payload],
        points:
          points +
          (action.payload === questions[index].answer
            ? questions[index].points
            : 0),
      };
    case "step":
      return { ...state, index: index + action.payload };
    case "finish": {
      localStorage.setItem(
        `highscore-${selectedPlayer.name}`,
        Math.max(
          points,
          localStorage.getItem(`highscore-${selectedPlayer.name}`) || 0
        )
      );
      return {
        ...state,
        status: "finished",
        highscore: localStorage.getItem(`highscore-${selectedPlayer.name}`),
        secondsRemaining:
          selectedPlayer.questions.length * SECONDS_PER_QUESTION,
        errorMsg: null,
      };
    }
    case "restart":
      return { ...initialState, players: players, status: "ready" };
    default:
      return { ...state, status: "error", errorMsg: "Unknown Acion" };
  }
}

function App() {
  const [
    {
      status,
      players,
      selectedPlayer,
      questions,
      answers,
      index,
      points,
      highscore,
      secondsRemaining,
      errorMsg,
      maxPoints,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <>
      <Header />
      <Main className="main">
        {status === "start" && <StartScreen dispatch={dispatch} />}
        {status === "loading" && <LoaderScreen dispatch={dispatch} />}
        {status === "error" && <ErrorScreen errorMsg={errorMsg} />}
        {status === "ready" && (
          <PlayersScreen
            players={players}
            dispatch={dispatch}
            selectedPlayer={selectedPlayer}
          />
        )}
        {status === "active" && (
          <QuestionScreen
            index={index}
            numQuestions={questions.length}
            questions={questions}
            answers={answers}
            points={points}
            maxPoints={maxPoints}
            secondsRemaining={secondsRemaining}
            dispatch={dispatch}
          />
        )}
        {status === "finished" && (
          <FinalScreen
            dispatch={dispatch}
            points={points}
            highscore={highscore}
            maxPoints={maxPoints}
          />
        )}
      </Main>
    </>
  );
}

export default App;
