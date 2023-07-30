import React from "react";
import getQuestion from "../components/QuestionList.js"

import { nanoid } from "nanoid"
import Question from "../components/Question.js";


function Main(props) {

    const [questions, setQuestions] = React.useState()
    const [checked, setChecked] = React.useState(false)
    const [correctAns, setCorrectAns] = React.useState(0)

    const shuffleArray = (arr) => arr.sort(() => Math.random - 0.5)
    React.useEffect(() => {
        let q = [];
        getQuestion(props.gameOptions).then(data => {
            data.results.forEach(question => {
                q.push(
                    {
                        id: nanoid(),
                        answer: shuffleArray([...question.incorrect_answers, question.correct_answer]),
                        question: question.question,
                        correct: question.correct_answer,
                        selected: null,
                        checked: false
                    }
                )
            })

            setQuestions(q)
        })

    }, [])


    function handleClickAnswer(id, answer) {

        setQuestions(questions => questions.map(question => {
            if (question.id === id) return { ...question, selected: answer }
            else return question
        }))
    }

    const questionElement = questions ? questions.map(ques => {
        return (<Question
            key={ques.id}
            id={ques.id}
            ques={ques}
            handleClickAnswer={handleClickAnswer}
        />)
    }) : []

    function checkAnswer() {
        let selected = true;

        questions.forEach(question => {
            if (question.selected === null) {
                selected = false
                return
            }
        })
        if (!selected) {
            return
        }

        setQuestions(questions => questions.map(question => {
            return { ...question, checked: true }
        }))

        setChecked(true)

        let cnt = 0;

        questions.forEach(question => {
            if (question.correct === question.selected) cnt++;
        })
        setCorrectAns(cnt);
    }



    return (
        <section className="section">
            <div className="container">
                <div className="question--container">
                    {questionElement}
                </div>
                <div className="score">
                    {checked && <h2 className="correct-ans">Score : {correctAns}/10</h2>}
                    <button className="check--answer" onClick={checked ? props.restart : checkAnswer}>{checked ? "Play Again" : "Check Answer"}</button>
                </div>
            </div>
        </section>
    )
}

export default Main