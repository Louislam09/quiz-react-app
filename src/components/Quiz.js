import React from 'react';
import QuizPage from './QuizPage';

const Quiz = () => {
    return (
        <div className="quiz__container">
            <div className="quiz__header">
                <div className="quiz__header__items">
                    <i class="material-icons">chevron_left</i>
                    <div className="quiz__header__title">Quiz Page</div>
                    <div className="quiz__header__exit">Exit</div>
                </div>
                <div className="quiz__porcentage">
                    <div className="quiz__porcentage__value"></div>
                </div>
            </div>

            <div className="quiz__pages">
                <QuizPage />
            </div>
        </div>
    )
}

export default Quiz;
