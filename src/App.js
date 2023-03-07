import './App.css';
import Login from './tamplate/login/login';
import Navbar from './componentes/navbar';
import Logo from './componentes/logo';
import Home from './tamplate/home/home';
import Carrito from './tamplate/carrito.js/carrito';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Proyecto WEB CONNECTION DAY
        </p>
        <p>
          Hola
        </p>

        <Login />
        <Navbar />
        <Logo />
        <Home />
        <Carrito />
      </header>
    </div>
  );
}

export default App;
