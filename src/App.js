import "./App.css";
import Header from "./components/Header/Header";
import TopButtons from "./components/TopButtons/TopButtons";
import Index from "./pages/Index/Index";
import Development from "./pages/Development/Development";
import Traveling from "./pages/Traveling/Traveling";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Post1 from "./pages/Blog/Post1/Post1";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { changeBackButton, letsGoBack } from "./functions/backButton/backButton";

function App(props) {
  const [menuActive, setMenuActive] = useState(false);

  const isMainPage = window.location.href.split("/")[3];
  const [backButton, setBackButton] = useState(!isMainPage ? false : true);

  const [backAddress, setBackAddress] = useState('/');

  return (
    <BrowserRouter>
      <div
        className={menuActive ? "App headerActive" : "App"}
        onClick={() => {
          changeBackButton(setBackButton);
          letsGoBack(setBackAddress);
        }}
      >
        <header className="header">
          <Header menuItems={props.menuItems} menuActive={menuActive} />
        </header>
        <div className="content">
          <TopButtons
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            backButton={backButton}
            setBackButton={setBackButton}
            backAddress={backAddress}
          />
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
              <Route path="/blog/post1" element={<Post1 />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
