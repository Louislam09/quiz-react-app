import React from 'react';

const QuizResult = () => {
    return (
        <div className="quiz__result__container">
            <div className="quiz__result__header">
                <i class="material-icons">chevron_left</i>
                <div className="quiz__result__title">Your Score</div>
            </div>

            <div className="quiz__result__porcentage">
                <div className="quiz__result__value"></div>
                <div className="result__value">4 / 5</div>
            </div>

            <div className="quiz__result__report">
                <div className="report__title">Your Report</div>
                <div className="report__items">
                    <div className="repot__question__answer">
                        <div className="report__question">Quistion 1</div>
                        <div className="answer__correct">hola</div>
                        <div className="answer__incorrect">hello</div>
                    </div>
                    <div className="repot__question__answer">
                        <div className="report__question">Quistion 2</div>
                        <div className="answer__correct">hola</div>
                        <div className="answer__incorrect">hello</div>
                    </div>
                    <div className="repot__question__answer">
                        <div className="report__question">Quistion 3</div>
                        <div className="answer__correct">hola</div>
                        <div className="answer__incorrect">hello</div>
                    </div>
                    <div className="repot__question__answer">
                        <div className="report__question">Quistion 4</div>
                        <div className="answer__correct">hola</div>
                        <div className="answer__incorrect">hello</div>
                    </div>
                    <div className="repot__question__answer">
                        <div className="report__question">Quistion 5</div>
                        <div className="answer__correct">hola</div>
                        <div className="answer__incorrect">hello</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default QuizResult;
