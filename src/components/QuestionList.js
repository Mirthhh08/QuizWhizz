import { nanoid } from "nanoid"

export default function QuestionList(gameOptions) {

    const { category, difficulty, type } = gameOptions

    let categoryValue = ""
    let difficultyValue = ""
    let typeValue = ""

    if (category !== "") {
        categoryValue = category
    }


    if (difficulty !== "") {
        difficultyValue = difficulty
    }

    if (type !== "") {
        typeValue = type
    }

    return fetch(`https://opentdb.com/api.php?amount=10&category=${categoryValue}&difficulty=${difficultyValue}&type=${typeValue}`)
        .then(res => res.json())
        .then(data => data)
}



