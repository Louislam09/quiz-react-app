import React from 'react'

const Topics = () => {
    return (
        <div className="topic__container">
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
