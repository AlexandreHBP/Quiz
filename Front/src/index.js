import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importa os estilos globais
import App from './App';  // Importa o componente raiz da aplicação

// Cria uma root DOM e renderiza o componente App dentro do elemento com id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você está usando uma versão mais antiga do React (< 18), você pode ver isso:
// ReactDOM.render(<App />, document.getElementById('root'));
