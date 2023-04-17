import './App.css';
import {Route, Routes} from "react-router-dom";
import BookingPage from './components/route/BookingPage';
import Home from './components/route/Home';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<BookingPage />}/>
    </Routes>
    </div>
  );
}

export default App;
