import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyAPP from "./page/MyAPP";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyAPP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
