import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseState from "./components/UseState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <button><Link to="/">Home</Link></button> | &nbsp;
          <button><Link to="/UseState">useState Hook</Link></button> | &nbsp;
          
          <br />
        </div>
        <Routes>
          <Route path="/UseState" element={<UseState />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
