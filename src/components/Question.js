import React from "react";
import { nanoid } from "nanoid"
function Question(props) {

    let answers = props.ques.answer


    function handleClick(answer) {
        if (props.ques.checked) {
            return
        }

        props.handleClickAnswer(props.id, answer)
    }


    const answersElement = answers.map(answer => {
        let id = null
        if (props.ques.checked) {
            if (props.ques.correct === answer) {
                id = "correct"
            }
            else if (props.ques.correct !== answer) {
                id = "incorrect"
            }
            else {
                id = "notselected"
            }
        }
        return (
            <button key={nanoid()}
                id={id}
                className={answer === props.ques.selected ? "answer selected" : "answer"}
                onClick={() => handleClick(answer)}>{answer}</button>

        )
    })

    return (
        <div className="question">
            <h3 className="question--title">{props.ques.question}</h3>
            <div className="options">
                {answersElement}
            </div>
            <hr />
        </div>
    )
}


export default Question