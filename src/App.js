import React, { useEffect, useState } from 'react';
import Typped from './components/Typped'
import Hangman from './components/Hangman'
import Game from './components/Game'
// import Result from './components/Result'
// import Notification from './components/Notification'

const words = [
    'CAT',
    'CAR',
    'DOG',
    'LOVE',
    'GOD',
    'SMOKE',
    'ROCK',
    'ODD',
    'PORK',
    'MOUTCH',
    'fork',
    'SNAKE',
    'LAKE',
    'DATE',
    'FACE',
    'NAIL',
    'SAIL',
    'MAIL',
    'BIKE',
    'DAIRY'
]
// let word = words[Math.floor(Math.random() * words.length)];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [chances, setChances] = useState(6)

    useEffect(() => {
        const handleKeyDown = event => {
            const { key, keyCode } = event;

                if (playable && keyCode >= 65 && keyCode <= 90) {
                    const letter = key.toUpperCase()

                    if (selectedWord.includes(letter)) {
                        if (!correctLetters.includes(letter)) {
                            setCorrectLetters(prevState => [...prevState, letter])
                        } else {
                            console.log("you've already click this letter")
                        }
                    } else {
                        if (!wrongLetters.includes(letter)) {
                            setWrongLetters(prevState => [...prevState, letter])
                        } else {
                            console.log("you've already click this letter")
                        }
                    }
                }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [correctLetters, wrongLetters, playable])

    return (
        <>
            <Typped wrongLetters={wrongLetters}/>
            <Hangman/>
            <Game selectedWord={selectedWord} correctLetters={correctLetters}/>
        </>
    )
}

export default App