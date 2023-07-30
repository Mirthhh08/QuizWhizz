import React from "react"
import { nanoid } from "nanoid"
import Main from "./components/Main"

export default function App() {

    const [gameOptions, setGameOptions] = React.useState(
        {
            category: "",
            difficulty: "",
            type: "",

        }
    )
    const [startGame, setStartGame] = React.useState(true)

    function toggle() {
        setStartGame(prev => !prev)
    }
    function replay() {
        setStartGame(true)
    }
    const handleChange = event => {
        const { name, value } = event.target

        setGameOptions(prevGameValues => {
            return {
                ...prevGameValues,
                [name]: value
            }
        })

    }

    return (
        <>
            <svg className="yellow" xmlns="http://www.w3.org/2000/svg" width="158" height="141" viewBox="0 0 158 141" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.4095 81.3947C35.1213 50.8508 -2.68211 21.7816 1.17274 -19.6933C5.43941 -65.599 39.854 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.538 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z" fill="#FFFAD1" />
            </svg>
            <svg className="blue" xmlns="http://www.w3.org/2000/svg" width="148" height="118" viewBox="0 0 148 118" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z" fill="#DEEBF8" />
            </svg>

            {
                startGame ?
                    <main className="main">
                        <div className="game--container">
                            <h1 className="game--title">Qizzical</h1>
                            <div className="game-options">
                                <div className="select-container">
                                    <label className="custom-label" htmlFor="category">Category:</label>
                                    <select
                                        name="category"
                                        className="custom-select"
                                        value={gameOptions.category}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any Category</option>
                                        <option value="9">General Knowledge</option>
                                        <option value="10">Entertainment: Books</option>
                                        <option value="11">Entertainment: Film</option>
                                        <option value="12">Entertainment: Music</option>
                                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                                        <option value="14">Entertainment: Television</option>
                                        <option value="15">Entertainment: Video Games</option>
                                        <option value="16">Entertainment: Board Games</option>
                                        <option value="17">Science &amp; Nature</option>
                                        <option value="18">Science: Computers</option>
                                        <option value="19">Science: Mathematics</option>
                                        <option value="20">Mythology</option>
                                        <option value="21">Sports</option>
                                        <option value="22">Geography</option>
                                        <option value="23">History</option>
                                        <option value="24">Politics</option>
                                        <option value="25">Art</option>
                                        <option value="26">Celebrities</option>
                                        <option value="27">Animals</option>
                                        <option value="28">Vehicles</option>
                                        <option value="29">Entertainment: Comics</option>
                                        <option value="30">Science: Gadgets</option>
                                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                                    </select>
                                </div>

                                <div className="select-container">
                                    <label className="custom-label" htmlFor="difficulty">Difficulty:</label>
                                    <select

                                        name="difficulty"
                                        id="difficulty"
                                        className="custom-select"
                                        value={gameOptions.difficulty}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any Difficulty</option>
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>


                                <div className="select-container">
                                    <label className="custom-label" htmlFor="type">Type:</label>
                                    <select

                                        name="type"
                                        id="type"
                                        className="custom-select"
                                        value={gameOptions.type}
                                        onChange={handleChange}
                                    >
                                        <option value="">Any Type</option>
                                        <option value="multiple">Multiple Choice</option>
                                        <option value="boolean">True / False</option>
                                    </select>
                                </div>

                            </div>

                            <button className="start--button" onClick={toggle}>Start Quiz</button>

                        </div>
                    </main>

                    :
                    <Main
                        gameOptions={gameOptions}
                        restart={replay}
                    />
            }

            <footer>
                <div className="footer">
                    <p> Developed by Mirth Pawar</p>
                </div>
            </footer>
        </>
    )
}