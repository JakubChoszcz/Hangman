import React from 'react';

const Typped = ({ wrongLetters }) => {
    return (
        <div className='typped'>
            <p className='typped-info'>TYPPED LETTERS:</p>
            <p className='typped-letters'>{wrongLetters.join(', ')}</p>
        </div>
    )
}

export default Typped