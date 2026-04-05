import React, { useState, useEffect } from 'react';

const JuegoContador = () => {
  const [gameState, setGameState] = useState('idle'); // 'idle', 'countdown', 'playing', 'finished'
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [message, setMessage] = useState('');

  // Efecto para la cuenta regresiva visual ("Preparados", "Listos", "Ya")
  useEffect(() => {
    let timeout1;
    let timeout2;
    let timeout3;

    if (gameState === 'countdown') {
      setMessage('Preparados');
      
      timeout1 = setTimeout(() => {
        setMessage('Listos');
      }, 1000);
      
      timeout2 = setTimeout(() => {
        setMessage('Ya');
        setGameState('playing'); 
        setTimeLeft(5); 
      }, 2000);

      timeout3 = setTimeout(() => {
        setMessage('');
      }, 3000);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [gameState]);

  // Efecto para el temporizador numérico (5, 4, 3, 2, 1)
  useEffect(() => {
    let timer;

    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (gameState === 'playing' && timeLeft === 0) {
      setGameState('finished');
    }

    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  // Efecto para guardar el récord
  useEffect(() => {
    if (gameState === 'finished') {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
    }
  }, [gameState, currentScore, highScore]);

  const handleStartGame = () => {
    setCurrentScore(0);
    setGameState('countdown');
  };

  const handleScoreClick = () => {
    if (gameState === 'playing') {
      setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  const isStartDisabled = gameState === 'countdown' || gameState === 'playing';
  const isClickDisabled = gameState !== 'playing';

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Juego Contador</h1>

      {/* Panel de Puntajes y TIEMPO divididos claramente */}
      <div style={styles.scoreBoard}>
        <div style={styles.scoreBox}>
          <span style={styles.scoreLabel}>Máximo</span>
          <span style={styles.scoreValue}>{highScore}</span>
        </div>
        
        <div style={styles.scoreBox}>
          <span style={styles.scoreLabel}>Tiempo</span>
          <span style={{...styles.scoreValue, color: gameState === 'playing' ? '#e74c3c' : '#2c3e50'}}>
            {gameState === 'playing' ? `${timeLeft}s` : '5s'}
          </span>
        </div>

        <div style={styles.scoreBox}>
          <span style={styles.scoreLabel}>Actual</span>
          <span style={styles.scoreValue}>{currentScore}</span>
        </div>
      </div>

      {/* Área central dedicada únicamente a los mensajes de estado */}
      <div style={styles.displayArea}>
        <span style={styles.message}>
          {gameState === 'idle' && 'Presiona Iniciar'}
          {(gameState === 'countdown' || gameState === 'playing') && message}
          {gameState === 'finished' && '¡Tiempo!'}
        </span>
      </div>

      {/* Controles del juego */}
      <div style={styles.controls}>
        <button 
          style={{...styles.buttonStart, ...(isStartDisabled ? styles.buttonDisabled : {})}} 
          onClick={handleStartGame} 
          disabled={isStartDisabled}
        >
          {gameState === 'finished' ? 'Jugar de nuevo' : 'Iniciar Juego'}
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button 
          style={{...styles.buttonClick, ...(isClickDisabled ? styles.buttonClickDisabled : {})}} 
          onClick={handleScoreClick} 
          disabled={isClickDisabled}
        >
          ¡CLICK AQUÍ!
        </button>
      </div>
    </div>
  );
};

// Vuelve a incluir estos estilos para que no te tire error y se vea bien la interfaz
const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: '480px',
    margin: '3rem auto',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    border: '1px solid #eaeaea'
  },
  title: {
    color: '#2c3e50',
    margin: '0 0 1.5rem 0'
  },
  scoreBoard: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    marginBottom: '1rem'
  },
  scoreBox: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '80px',
  },
  scoreLabel: {
    fontSize: '0.85rem',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  scoreValue: {
    fontSize: '2.5rem',
    fontWeight: '900',
    color: '#2c3e50',
    transition: 'color 0.3s'
  },
  displayArea: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5rem 0',
    backgroundColor: '#eef2f5',
    borderRadius: '12px'
  },
  message: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#e67e22',
  },
  controls: {
    marginBottom: '1rem'
  },
  buttonStart: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    transition: 'background 0.2s',
  },
  buttonDisabled: {
    backgroundColor: '#95a5a6',
    cursor: 'not-allowed',
    opacity: 0.7
  },
  buttonClick: {
    padding: '20px 40px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    width: '100%',
    boxShadow: '0 6px 0 #2980b9',
    transition: 'transform 0.1s, box-shadow 0.1s',
  },
  buttonClickDisabled: {
    backgroundColor: '#bdc3c7',
    boxShadow: 'none',
    cursor: 'not-allowed',
    color: '#ecf0f1',
    transform: 'none'
  }
};

export default JuegoContador;