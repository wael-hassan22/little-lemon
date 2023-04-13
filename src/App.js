import Nav from "./components/Nav"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
