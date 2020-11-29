import React from 'react';
import bolbImage from '../bolb.png';

const MainScreen = () => {
    return (
        <div className="main__screen__container">
            <div className="main__screen__image">
                <img src={bolbImage} alt="bolb" />
                <div className="main__screen__title">
                    React Quizz App
                </div>
            </div>


            <div className="main__screen__buttons">
                <button className="main__screen__play__button">PLAY</button>
                <button className="main__screen__topic__button">TOPICS</button>
            </div>
        </div>
    )
}

export default MainScreen;
