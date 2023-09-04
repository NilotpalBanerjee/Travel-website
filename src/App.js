import './App.css';
import Home from './Pages/home';
import About from './Pages/about';
import Tours from './Pages/tours';
import Destinations from './Pages/destinations';
import Blog from './Pages/blog';
import Contact from './Pages/contact';
import Booking from './Pages/booking';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/tours' element={< Tours />}></Route>
            <Route exact path='/destinations' element={< Destinations />}></Route>
            <Route exact path='/blog' element={< Blog />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/booking' element={< Booking />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
