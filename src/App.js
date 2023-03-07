import './App.css';

import Navbar from './tamplate/navbar';

import Home from './tamplate/home/home';


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
