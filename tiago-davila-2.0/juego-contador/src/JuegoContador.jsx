import { useState, useEffect } from 'react';
import './JuegoContador.css';

const DURACION = 5;
const mensajesConteo = ['Preparados', 'Listos', 'Ya'];

export default function JuegoContador() {
  const [estado, setEstado] = useState('idle');
  const [highScore, setHighScore] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [tiempo, setTiempo] = useState(DURACION);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if (estado !== 'cuenta') return;

    const timers = mensajesConteo.map((texto, i) =>
      setTimeout(() => {
        setMensaje(texto);
        if (i === mensajesConteo.length - 1) {
          setEstado('jugando');
          setTiempo(DURACION);
        }
      }, i * 1000)
    );

    return () => timers.forEach(clearTimeout);
  }, [estado]);

  // temporizador principal
  useEffect(() => {
    if (estado !== 'jugando') return;

    const interval = setInterval(() => {
      setTiempo(t => {
        if (t <= 1) {
          clearInterval(interval);
          setEstado('fin');
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [estado]);

  // guardar récord
  useEffect(() => {
    if (estado === 'fin' && puntaje > highScore) {
      setHighScore(puntaje);
    }
  }, [estado]);

  function iniciar() {
    setPuntaje(0);
    setMensaje('');
    setEstado('cuenta');
  }

  function sumar() {
    if (estado === 'jugando') setPuntaje(p => p + 1);
  }

  const bloqueado = estado === 'cuenta' || estado === 'jugando';

  return (
    <div className="juego-wrapper">
      <h1 className="juego-titulo">Juego Contador</h1>

      <div className="juego-tablero">
        <div className="juego-celda">
          <span className="juego-celda-label">Máximo</span>
          <span className="juego-celda-valor">{highScore}</span>
        </div>

        <div className="juego-celda">
          <span className="juego-celda-label">Tiempo</span>
          <span className={`juego-celda-valor ${estado === 'jugando' ? 'tiempo-activo' : ''}`}>
            {estado === 'jugando' ? `${tiempo}s` : `${DURACION}s`}
          </span>
        </div>

        <div className="juego-celda">
          <span className="juego-celda-label">Actual</span>
          <span className="juego-celda-valor">{puntaje}</span>
        </div>
      </div>

      <div className="juego-display">
        <span className="juego-mensaje">
          {estado === 'idle' && 'Presioná iniciar'}
          {(estado === 'cuenta' || estado === 'jugando') && mensaje}
          {estado === 'fin' && '¡Tiempo!'}
        </span>
      </div>

      <button className="btn-iniciar" onClick={iniciar} disabled={bloqueado}>
        {estado === 'fin' ? 'Jugar de nuevo' : 'Iniciar juego'}
      </button>

      <button className="btn-click" onClick={sumar} disabled={estado !== 'jugando'}>
        ¡Click aquí!
      </button>
    </div>
  );
}