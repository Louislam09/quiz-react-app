import React from 'react';

const QuizResult = () => {
    return (
        <div className="quiz__result__container">

            <div className="main__screen__circle_3" style={{background: "#0084ff"}}></div>
            <div className="main__screen__circle" style={{background: "#0084ff"}}></div>
            <div className="main__screen__circle_2" style={{background: "#418b8b"}}></div>

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
                        <div className="report__question">Who is the current prime minister of india ?</div>
                        
                        <div className="answers">
                            <div className="answer__correct">
                                <i class="material-icons">check</i>
                                <p>Modi G</p>
                            </div>
                            <div className="answer__incorrect">
                            <i class="material-icons">close</i>
                                <p>Luis M</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="repot__question__answer">
                        <div className="report__question">Which month of the year has the least number of day?</div>
                        
                        <div className="answers">
                            <div className="answer__correct">
                                <i class="material-icons">check</i>
                                <p>February</p>
                            </div>
                            <div className="answer__incorrect">
                            <i class="material-icons">close</i>
                                <p>March</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="repot__question__answer">
                        <div className="report__question">How many months of the year have 31 days?</div>
                        
                        <div className="answers">
                            <div className="answer__correct">
                                <i class="material-icons">check</i>
                                <p>7</p>
                            </div>
                            <div className="answer__incorrect">
                            <i class="material-icons">close</i>
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="repot__question__answer">
                        <div className="report__question">Which animal is called King of Jungle ?</div>
                        
                        <div className="answers">
                            <div className="answer__correct">
                                <i class="material-icons">check</i>
                                <p>Lion</p>
                            </div>
                            <div className="answer__incorrect">
                            <i class="material-icons">close</i>
                                <p>Tiger</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="repot__question__answer">
                        <div className="report__question">Which is the fastest animal on the land ?</div>
                        
                        <div className="answers">
                            <div className="answer__correct">
                                <i class="material-icons">check</i>
                                <p>Chesta</p>
                            </div>
                            <div className="answer__incorrect">
                            <i class="material-icons">close</i>
                                <p>Lion</p>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>

        </div>
    )
}

export default QuizResult;
