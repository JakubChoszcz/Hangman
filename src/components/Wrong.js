import React from 'react';

const Wrong = ({ wrongLetters }) => {
    return (
        <div className='wrong'>
            <p className='wrong-info'>WRONG LETTERS:</p>
            <p className='wrong-letters'>{wrongLetters.join(', ')}</p>
        </div>
    )
}

export default Wrong