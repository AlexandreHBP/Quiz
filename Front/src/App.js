import React, { useState } from 'react';
import QuizSolar from './components/QuizSolar';
import QuizManager from './components/QuizManager';
import './App.css';

function App() {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState('quiz');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-6xl">
        {/* Abas para alternar entre QuizSolar e QuizManager */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 font-bold ${activeTab === 'quiz' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-300'}`}
            onClick={() => setActiveTab('quiz')}
          >
            Quiz do Sistema Solar
          </button>
          <button
            className={`px-4 py-2 mx-2 font-bold ${activeTab === 'manager' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-300'}`}
            onClick={() => setActiveTab('manager')}
          >
            Gerenciador De Quiz
          </button>
        </div>

        {/* Renderização condicional dos componentes com base na aba ativa */}
        <div className="text-center">
          {activeTab === 'quiz' ? <QuizSolar /> : <QuizManager />}
        </div>
      </div>
    </div>
  );
}

export default App;
