import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
