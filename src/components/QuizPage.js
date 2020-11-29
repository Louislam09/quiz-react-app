import React from 'react'

const QuizPage = () => {
    return (
        <div className="quiz__page__container">
            <div className="quiz__question__answer">
                <div className="quiz__question">
                    Which month of the year has the
                    least number of days?
                </div>

                <div className="quiz__answers__list">
                    <div className="quiz__answer">January</div>
                    <div className="quiz__answer">February</div>
                    <div className="quiz__answer">March</div>
                    <div className="quiz__answer">June</div>
                </div>
            </div>

            <div className="quiz__button">
                <button>Next</button>
            </div>
        </div>
    )
}

export default QuizPage;
