import logo from "./logo.svg";
import "./App.css";
import Score from "./Score";
import Game from "./Game";
import { useState } from "react";


const App = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const answerHandler = (correctAnswer) => {
    if (correctAnswer) {
      setNumCorrect(numCorrect + 1);
    }
    setNumQuestions(numQuestions + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game answerHandler={answerHandler}/>
        <Score numCorrect={numCorrect} numQuestions={numQuestions} />
      </div>
    </div>
  );
};

export default App;
