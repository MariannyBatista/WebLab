import './App.css';
import Login from './tamplate/login/login';
import Navbar from './tamplate/navbar';
import Logo from './componentes/logo';
import Home from './tamplate/home/home';
import Carrito from './tamplate/carrito.js/carrito';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
