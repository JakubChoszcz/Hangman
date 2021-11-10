import React from 'react';

const Hangman = ({ wrongLetters }) => {
    const pro = wrongLetters.length

    return (
        <div className='hangman-picture'>
            <div className='hook hpe'></div>
            {pro > 0 && 
                <div className='hpe-0 hpe'>
            </div>}
            
            {pro > 1 && 
                <div className='hpe-1 hpe'>
            </div>}
            
            {pro > 2 && 
                <div className='hpe-2 hpe'>
            </div>}
            
            {pro > 3 && 
                <div className='hpe-3 hpe'>
            </div>}
            
            {pro > 4 && 
                <div className='hpe-4 hpe'>
            </div>}
            
            {pro > 5 && 
                <div className='hpe-5 hpe'>
            </div>}
            
            {pro > 6 && 
                <div className='hpe-6 hpe'>
            </div>}
        </div>
    )
}

export default Hangman