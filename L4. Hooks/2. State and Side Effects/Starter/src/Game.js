import React, { useEffect, useState } from "react";

export const Game = ({ answerHandler }) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [proposedAnswer, setProposedAnswer] = useState(null);

  //make new eqution
  const makeNewEqu = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };

  useEffect(()=>{
    let newequ=makeNewEqu()
    setValue1(newequ[0])
    setValue2(newequ[1])
    setValue3(newequ[2])
    setProposedAnswer(newequ[3])
  },[])

  //refresh
const refresh=(newArr)=>{
    setValue1(newArr[0])
    setValue2(newArr[1])
    setValue3(newArr[2])
    setProposedAnswer(newArr[3])
}

const onClickHandler=(event)=>{
    let newequ=makeNewEqu()
    refresh(newequ)
    const ifAnswerCorrect=evaluate(event.target.name)
    answerHandler(ifAnswerCorrect)
}

    //evaluate
const evaluate=(answer)=>{
const correctAnswer=value1+value2+value3
return (correctAnswer===proposedAnswer && answer==='true')||(correctAnswer!==proposedAnswer && answer==='false')
}

  return (
    <>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button onClick={onClickHandler} name='true'>True</button>
      <button onClick={onClickHandler} name='false'>False</button>
    </>
  );
};

export default Game;
