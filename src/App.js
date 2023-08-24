import "./App.css";
import Header from "./components/Header/Header";
import TopButtons from "./components/TopButtons/TopButtons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Development from "./pages/Development/Development";
import Traveling from "./pages/Traveling/Traveling";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App(props) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <BrowserRouter>
      <div className={menuActive ? "App headerActive" : "App"}>
        <header className="header">
          <Header menuItems={props.menuItems} menuActive={menuActive} setMenuActive={setMenuActive} />
        </header>
        <div className="content">
          <TopButtons menuActive={menuActive} setMenuActive={setMenuActive} />
          <div className="contentBlock">
            <Routes>
              <Route
                exact
                path={props.menuItems.home.url}
                element={
                  <Index page={props.menuItems.home} menuItems={props.menuItems} forIndexPage={props.forIndexPage} />
                }
              />
              <Route path={props.menuItems.traveling.url} element={<Traveling page={props.menuItems.traveling} />} />
              <Route
                path={props.menuItems.development.url}
                element={<Development page={props.menuItems.development} />}
              />
              <Route path={props.menuItems.contacts.url} element={<Contacts page={props.menuItems.contacts} />} />
              <Route path={props.menuItems.blog.url} element={<Blog page={props.menuItems.blog} />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
