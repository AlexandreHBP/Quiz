import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizManager = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctNumber, setCorrectNumber] = useState(1);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/quiz');
      setQuizzes(response.data);
    } catch (error) {
      console.error('Erro ao buscar quizzes:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quizData = {
      question,
      option_1: option1,
      option_2: option2,
      option_3: option3,
      option_4: option4,
      correct_number: correctNumber,
    };

    try {
      if (selectedQuiz) {
        // Atualizar quiz existente
        await axios.put(`http://localhost:3000/quiz/${selectedQuiz.id}`, quizData);
        setSelectedQuiz(null);
      } else {
        // Criar novo quiz
        await axios.post('http://localhost:3000/quiz', quizData);
      }
      fetchQuizzes();
      resetForm();
    } catch (error) {
      console.error('Erro ao salvar o quiz:', error);
    }
  };

  const resetForm = () => {
    setQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setCorrectNumber(1);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/quiz/${id}`);
      fetchQuizzes();
    } catch (error) {
      console.error('Erro ao deletar o quiz:', error);
    }
  };

  const handleEdit = (quiz) => {
    setSelectedQuiz(quiz);
    setQuestion(quiz.question);
    setOption1(quiz.option_1);
    setOption2(quiz.option_2);
    setOption3(quiz.option_3);
    setOption4(quiz.option_4);
    setCorrectNumber(quiz.correct_number);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Gerenciador de Quiz</h1>
        
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Pergunta</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Opção 1</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Opção 2</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Opção 3</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Opção 4</label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Número da Resposta Correta</label>
            <input
              type="number"
              min="1"
              max="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={correctNumber}
              onChange={(e) => setCorrectNumber(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {selectedQuiz ? 'Atualizar' : 'Cadastrar'} Quiz
            </button>
            {selectedQuiz && (
              <button
                type="button"
                onClick={resetForm}
                className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>

        <h2 className="text-xl font-bold mb-4 text-gray-700">Lista de Quizzes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 text-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Pergunta</th>
                <th className="py-2 px-4 text-left">Opção 1</th>
                <th className="py-2 px-4 text-left">Opção 2</th>
                <th className="py-2 px-4 text-left">Opção 3</th>
                <th className="py-2 px-4 text-left">Opção 4</th>
                <th className="py-2 px-4 text-left">Resposta Correta</th>
                <th className="py-2 px-4 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map((quiz) => (
                <tr key={quiz.id} className="bg-gray-800 border-b border-gray-600">
                  <td className="py-2 px-4">{quiz.question}</td>
                  <td className="py-2 px-4">{quiz.option_1}</td>
                  <td className="py-2 px-4">{quiz.option_2}</td>
                  <td className="py-2 px-4">{quiz.option_3}</td>
                  <td className="py-2 px-4">{quiz.option_4}</td>
                  <td className="py-2 px-4">{quiz.correct_number}</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(quiz)}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(quiz.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                      >
                        Deletar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizManager;
