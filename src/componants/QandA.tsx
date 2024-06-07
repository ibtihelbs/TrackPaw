import React, { useState } from "react";
import P from "./P";

type QAtype = {
  question: string;
  answer: string;
};

const QandA: React.FC<QAtype> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="mb-4 max-w-full">
      <button
        onClick={toggleAnswer}
        className="text-left w-full focus:outline-none"
      >
        <P content={<strong>Q: {question}</strong>} />
      </button>
      {showAnswer && <P content={<span>A: {answer}</span>} />}
    </div>
  );
};

export default QandA;
