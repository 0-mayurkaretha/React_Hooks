import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import Custom_useDocumentTitle from "./components/Custom_useDocumentTitle";

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
          <button><Link to="/UseCallback">UseCallback Hook</Link></button> | &nbsp;
          <button><Link to="/UseMemo">UseMemo Hook</Link></button> | &nbsp;
          <button><Link to="/UseRef">UseRef Hook</Link></button> | &nbsp;
          <button><Link to="/Custom_useDocumentTitle">custom UseDocumentTitle</Link></button> | &nbsp;
          
          <br />
        </div>
        <Routes>
          <Route path="/UseState" element={<UseState />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseContext" element={<UseContext />} />
          <Route path="/UseReducer" element={<UseReducer />} />
          <Route path="/UseCallback" element={<UseCallback />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="/Custom_useDocumentTitle" element={<Custom_useDocumentTitle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
