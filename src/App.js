import './App.css';
import { BrowserRouter as Router,  Route,  Routes,  Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/webdevtemplate" element={<Home />} />
          <Route path="*" element={<Navigate to="/webdevtemplate"/>} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;

