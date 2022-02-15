import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./page/main";
import About from "./page/about";


function App() {
  return (
    <BrowserRouter>
      <div className='header'>
        <div className="header_menu">
          <a className='menu header_menu_Main' href='/'>Main</a>
          <a className='menu header_menu_About' href='/About'>About</a>
          <a className='menu header_menu_Facebook' href='https://www.facebook.com/groups/668699797655314'>Facebook</a>
        </div>

      </div>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
