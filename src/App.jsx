import './App.css';
import PersonFunctional from './components/PersonFunctional';
import PersonClass from './components/PersonClass';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <h1>Componentes Funcionales</h1>
      <PersonFunctional name="Elida" surname="Rodriguez" age={47} />
      <PersonFunctional name="Ana" surname="Pérez" age={30} />
      <PersonFunctional name="Luis" surname="García" age={25} />

      <h1>Componentes de Clase</h1>
      <PersonClass name="Carlos" surname="Martínez" age={40} />
      <PersonClass name="Lucía" surname="Fernández" age={35} />
      <PersonClass name="Jorge" surname="Lopez" age={50} />
    </div>
  );
}

export default App;

