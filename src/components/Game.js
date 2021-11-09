import React from 'react';

const Game = ({ selectedWord, correctLetters }) => {
    return (
        <div className='game'>
            {selectedWord.split('').map(letter => 
                <div key={letter} className='game-board'>{
                    correctLetters.includes(letter) && letter
                }</div>
            )}
        </div>
    )
}

export default Game