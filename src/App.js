import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
