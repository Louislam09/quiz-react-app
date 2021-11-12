import React, { useReducer } from 'react';
import { QuizContext } from './hooks/context/useContext';
import quizReducer from './hooks/reducer/reducer/quizReducer';

import {
  MainScreen,
  Topics,
  Quiz,
  QuizResult
} from './components/index';
import showReducer from './hooks/reducer/reducer/showReducer';
import { ShowContext } from './hooks/context/showContext';


function App() {
  const [ quiz, dispatch ] = useReducer(quizReducer, []);
  const [ show, showDispatch ] = useReducer(showReducer, "hola");

  return (
    <div className="container">
      <QuizContext.Provider value={{ saludo: "hola" }}>
        <ShowContext.Provider value={{ show }}>
          <MainScreen />
          <Topics />
          <Quiz />
          <QuizResult />
        </ShowContext.Provider>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
