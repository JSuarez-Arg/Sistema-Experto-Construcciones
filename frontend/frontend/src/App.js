// frontend/src/App.js
import React from 'react';
import Chatbot from './components/Chatbot';
import './App.css'; // Importar App.css
import logo from './images/logo-suarez-construcciones.png'; // Importa tu logo

function App() {
  return (
    <div className="App">
      <h1>
        SISTEMA EXPERTO DE CONSTRUCCIÓN:<br /> 
        "Colocación de Pisos en Viviendas Familiares"
      </h1>
      <div className="content">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo a la izquierda */}
        <Chatbot /> {/* Ventana del chatbot a la derecha */}
      </div>
    </div>
  );
}

export default App;
