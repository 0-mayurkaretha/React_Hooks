import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";

function App() {
  return (
    <div className="App">
      <br/>
      <BrowserRouter>
        <div>
          <button><Link to="/">Home</Link></button> | &nbsp;
          <button><Link to="/UseState">useState Hook</Link></button> | &nbsp;
          <button><Link to="/UseEffect">useEffect Hook</Link></button> | &nbsp;
          <button><Link to="/UseContext">UseContext Hook</Link></button> | &nbsp;
          <button><Link to="/UseReducer">UseReducer Hook</Link></button> | &nbsp;
          
          <br />
        </div>
        <Routes>
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseContext" element={<UseContext />} />
          <Route path="/UseReducer" element={<UseReducer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
