
import './App.css';
import User from "./components/User";
import Navbar from "./components/Frontend/Header";
import Footer from "./components/Frontend/Footer";
function App() {
  return (
    <div className="App">
        <>
        <Navbar />
            <User />
            <Footer />
          </>
    </div>
  );
}

export default App;
