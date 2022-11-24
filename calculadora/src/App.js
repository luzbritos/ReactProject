import './App.css';
import luzlogo from './img/luzlogo.png'

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'  >
        <img 
        className='luz-logo'
        src={luzlogo} 
        alt='luz logo' />
      </div>
      <div className='contenedor-calculadora' >
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        
      </div>
    </div>
  );
}

export default App;
