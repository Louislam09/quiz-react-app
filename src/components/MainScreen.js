import React, { useContext } from 'react';
import bolbImage from '../bolb.png';
import { QuizContext } from '../hooks/context/useContext';

const MainScreen = () => {
    const show = useContext(QuizContext);
    console.log(show.show);

    return (
        <div className="main__screen__container">
            <div className="main__screen__circle" style={{background: "#0084ff"}}></div>
            <div className="main__screen__circle_2" style={{background: "#476bad"}}></div>
            <div className="main__screen__circle_3" style={{background: "#418b8b"}}></div>
           
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
