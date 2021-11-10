import React from 'react';
import ReactDOM from 'react-dom';

const Result = ({ selectedWord, playable, correctLetters, wrongLetters, playAgain }) => {
    let textResult = ''

    if (correctLetters.length === selectedWord.length) {
        textResult = 'Well done!'
    } else if (wrongLetters.length === 6) {
        textResult = 'So close!'
    }

    if (playable) {
        return null
    }
    else {
        return (
            ReactDOM.createPortal(
                <div className='OFFSET'>
                    <div className='result'>
                        <p className='result-text'>{textResult}</p>
                        <p className='result-word'>The word was: {selectedWord}</p>
                        <button className='result-btn' onClick={() => playAgain()}>Play Again</button>
                    </div>
                </div>,
                document.getElementById('portal')
            )
        )
    }
}

export default Result