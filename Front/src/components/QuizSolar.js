import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import axios from 'axios';

const QuizSolar = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showRedFlash, setShowRedFlash] = useState(false);

  const [windowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    axios.get('http://localhost:3000/quiz')
    .then(response => {
      setQuestions(response.data)
    })
    .catch(error => {
      alert(error.message)
    })
  },[])

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct_number) {
      setScore(score + 1);
      triggerFallingStars(); // Dispara a animação de estrelas cadentes
    } else {
      triggerRedFlash(); // Dispara a animação de piscar em vermelho
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const triggerFallingStars = () => {
    setShowStars(true);
    setTimeout(() => setShowStars(false), 1000); // As estrelas desaparecem após 1 segundo
  };

  const triggerRedFlash = () => {
    setShowRedFlash(true);
    setTimeout(() => setShowRedFlash(false), 500); // O flash vermelho desaparece após 0.5 segundo
  };

  const generateStars = () => {
    return Array.from({ length: 20 }).map((_, index) => {
      const randomX = Math.floor(Math.random() * windowDimensions.width);
      const randomDelay = Math.random() * 1;

      return (
        <div
          key={index}
          className="star"
          style={{
            left: `${randomX}px`,
            animationDelay: `${randomDelay}s`,
          }}
        />
      );
    });
  };

if (questions.length === 0) return null

  return (
    <div
      className="quiz-container p-6 max-w-lg mx-auto bg-cover bg-center bg-gray-900 bg-opacity-80 rounded-lg shadow-lg"
      style={{ backgroundImage: 'url(/assets/galaxy-background.jpg)' }}
    >
      {showScore ? (
        <div className="score-section text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Finalizado!</h2>
          <p className="text-lg">Você pontuou {score} de {questions.length}!</p>
          {score === questions.length && (
            <Confetti
              width={windowDimensions.width}
              height={windowDimensions.height}
            />
          )}
          <button
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
            onClick={() => window.location.reload()}
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count text-lg font-semibold">
            <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text my-4 text-xl font-medium">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-section grid grid-cols-2 gap-4">
          <button
                onClick={() => handleAnswerOptionClick(1)}
                className="option-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/assets/planet.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center left 10px',
                }}
              >
                <span>{questions[currentQuestion].option_1}</span>
              </button>
              <button
                onClick={() => handleAnswerOptionClick(2)}
                className="option-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/assets/planet.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center left 10px',
                }}
              >
                <span>{questions[currentQuestion].option_2}</span>
              </button>
              <button
                onClick={() => handleAnswerOptionClick(3)}
                className="option-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/assets/planet.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center left 10px',
                }}
              >
                <span>{questions[currentQuestion].option_3}</span>
              </button>
              <button
                onClick={() => handleAnswerOptionClick(4)}
                className="option-button bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/assets/planet.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center left 10px',
                }}
              >
                <span>{questions[currentQuestion].option_4}</span>
              </button>
          </div>
        </div>
      )}
      {showStars && (
        <div className="falling-stars-container">
          {generateStars()}
        </div>
      )}
      {showRedFlash && (
        <div className="flash-red-overlay"></div> // Overlay vermelho que pisca
      )}
    </div>
  );
};

export default QuizSolar;
