//Import route and our components
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./components/Stock";
import Nav from "./components/Nav"
import About from "./pages/About"
import "./style.css"

export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
        <Nav />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Stock" element={<Dashboard/>}/>
      <Route path="/Stock/:symbol" element={<Stock/>}/>
      <Route path = "/About" element={<About/>} />
    </Routes>
    </div>
  );
}