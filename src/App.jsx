import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Frames from one LAN can be transmitted to another LAN via the device",
      answers: [
        {
          text: "Modem",
          correct: false,
        },
        {
          text: "Repeater",
          correct: false,
        },
        {
          text: "Router",
          correct: false,
        },
        {
          text: "Bridge",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "The use of the break statement in a switch statement is",
      answers: [
        {
          text: "to check an error",
          correct: false,
        },
        {
          text: "not allowed. It gives an error message",
          correct: false,
        },
        {
          text: "compulsory",
          correct: false,
        },
        {
          text: "optional",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following assigns the number 5 to the area variable?",
      answers: [
        {
          text: "area < > 5",
          correct: false,
        },
        {
          text: "area == 5",
          correct: false,
        },
        {
          text: "area = 5",
          correct: true,
        },
        {
          text: "area 1 = 5",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which is a reserved word in the Java programming language?",
      answers: [
        {
          text: "array",
          correct: false,
        },
        {
          text: "reference",
          correct: false,
        },
        {
          text: "subclasses",
          correct: false,
        },
        {
          text: "native",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is a valid keyword in java?",
      answers: [
        {
          text: "float",
          correct: false,
        },
        {
          text: "String",
          correct: false,
        },
        {
          text: "Unsigned",
          correct: false,
        },
        {
          text: "interface",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which one of the following will declare an array and initialize it with five numbers?",
      answers: [
        {
          text: "int [5] array",
          correct: false,
        },
        {
          text: "int a [] = new int[5];",
          correct: false,
        },
        {
          text: "int [] a = {23,22,21,20,19};",
          correct: true,
        },
        {
          text: "Array a = new Array(5);",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which one is a valid declaration of a boolean?",
      answers: [
        {
          text: "boolean b5 = no;",
          correct: false,
        },
        {
          text: "boolean b4 = Boolean.false()",
          correct: false,
        },
        {
          text: "boolean b3 = false;",
          correct: true,
        },
        {
          text: "boolean b2 = 'false';",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which is a valid declarations of a String?",
      answers: [
        {
          text: "String s2 = 'null';",
          correct: false,
        },
        {
          text: "String s3 = (String) 'abc';",
          correct: false,
        },
        {
          text: "String s4 = (String) '\ufeed';",
          correct: false,
        },
        {
          text: "String s1 = null;",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "What is the numerical range of a char?",
      answers: [
        {
          text: "0 to 32767",
          correct: false,
        },
        {
          text: "-(215) to (215) - 1",
          correct: false,
        },
        {
          text: "-128 to 127",
          correct: false,
        },
        {
          text: "0 to 65535",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following is a part of the Central Processing Unit?",
      answers: [
        {
          text: "Mouse",
          correct: false,
        },
        {
          text: "Keyboard",
          correct: false,
        },
        {
          text: "Printer",
          correct: false,
        },
        {
          text: "Arithmetic Logic Unit",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Each of data files has a _____ that describe the way the data is stored in the file.",
      answers: [
        {
          text: "Database",
          correct: false,
        },
        {
          text: "Fields",
          correct: false,
        },
        {
          text: "File structure",
          correct: true,
        },
        {
          text: "Records",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the language used by most of the DBMSs for helping their users to access data?",
      answers: [
        {
          text: "4GL",
          correct: false,
        },
        {
          text: "SQL",
          correct: false,
        },
        {
          text: "Query language",
          correct: true,
        },
        {
          text: "High level language",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: " Process is",
      answers: [
        {
          text: "a job in secondary memory",
          correct: false,
        },
        {
          text: "contents of main memory",
          correct: false,
        },
        {
          text: "a program in execution",
          correct: true,
        },
        {
          text: "program in High level language kept on disk",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "The strategy of allowing processes that are logically runnable to be temporarily suspended is called",
      answers: [
        {
          text: "first come first served",
          correct: false,
        },
        {
          text: "shortest job first",
          correct: false,
        },
        {
          text: "non preemptive scheduling",
          correct: false,
        },
        {
          text: "preemptive scheduling",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "How many digits of the DNIC (Data Network Identification Code) identify the country?",
      answers: [
        {
          text: "first six",
          correct: false,
        },
        {
          text: "first five",
          correct: false,
        },
        {
          text: "first four",
          correct: false,
        },
        {
          text: "first three",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;