import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import TopButtons from "./components/TopButtons/TopButtons"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contacts/Contacts";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <Header pages={props.pages} />
        </header>
        <div className="content">
          <TopButtons />
          <div className="contentBlock">
            <Routes>
              <Route exact path="/" element={<Index pageName={props.pages.home.name} />} />
              <Route path="/portfolio" element={<Portfolio pageName={props.pages.portfolio.name} />} />
              <Route path="/contacts" element={<Contacts pageName={props.pages.contacts.name} />} />
              <Route path="/about" element={<About pageName={props.pages.about.name} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
