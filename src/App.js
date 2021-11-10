import React, { useEffect, useState } from 'react';
import Wrong from './components/Wrong'
import Hangman from './components/Hangman'
import Game from './components/Game'
import Result from './components/Result'

const words = [
    'CAT',
    'CAR',
    'DOG',
    'LOVE',
    'GOD',
    'SMOKE',
    'ROCK',
    'PORK',
    'MOUTCH',
    'FORK',
    'SNAKE',
    'LAKE',
    'DATE',
    'FACE',
    'NAIL',
    'SAIL',
    'MAIL',
    'BIKE',
    'DAIRY',
    'MILK'
]

let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    useEffect(() => {
        const handleKeyDown = event => {
            const { key, keyCode } = event;

                if (playable && keyCode >= 65 && keyCode <= 90) {
                    const letter = key.toUpperCase()

                    if (selectedWord.includes(letter)) {
                        if (!correctLetters.includes(letter)) {
                            setCorrectLetters(prevState => [...prevState, letter])
                        }
                    } else {
                        if (!wrongLetters.includes(letter)) {
                            setWrongLetters(prevState => [...prevState, letter])
                        }
                    }
                }
        }
        if (correctLetters.length === selectedWord.length || wrongLetters.length === 6) {
            setPlayable(false)
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [correctLetters, wrongLetters, playable])

    const playAgain = () => {
        setPlayable(true)
        setCorrectLetters([])
        setWrongLetters([])
        selectedWord = words[Math.floor(Math.random() * words.length)]
    }

    return (
        <>
            <Wrong wrongLetters={wrongLetters}/>
            <Hangman wrongLetters={wrongLetters}/>
            <Game selectedWord={selectedWord} correctLetters={correctLetters}/>

            <Result 
                selectedWord={selectedWord}
                playable={playable}
                setPlayable={() => setPlayable(false)}
                correctLetters={correctLetters} 
                wrongLetters={wrongLetters} 
                playAgain={() => playAgain()}
            />
        </>
    )
}

export default App