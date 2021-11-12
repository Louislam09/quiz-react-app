import React,{useContext} from 'react'
import { ShowContext } from '../hooks/context/showContext';
import { QuizContext } from '../hooks/context/useContext';

const Topics = () => {
    const show = useContext(ShowContext);
    console.log(show)

    return (
        <div className="topic__container">
            <div className="main__screen__circle_2" style={{background: "#476bad"}}></div>
            <div className="main__screen__circle" style={{background: "#418b8b"}}></div>
            <div className="main__screen__circle_3" style={{background: "#418b8b"}}></div>

            <div className="topic__header">
                <i class="material-icons">chevron_left</i>
                <div className="topic__title">Topic</div>
            </div>

            <div className="topic__list">
                <div className="topic__item">
                    <span className="topic__name">Animals</span>
                    <i class="material-icons">play_arrow</i>
                </div>
                <div className="topic__item">
                    <span className="topic__name">Musics</span>
                    <i class="material-icons">play_arrow</i>
                </div>
                <div className="topic__item">
                    <span className="topic__name">Books</span>
                    <i class="material-icons">play_arrow</i>
                </div>
            </div>
        </div>
    )
}

export default Topics;
