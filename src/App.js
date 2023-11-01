import { BrowserRouter, Link, NavLink } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { Provider } from "react-redux";
import store from "./store/store";
import './App.css';
import {FaHome} from "react-icons/fa";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <NavLink className={'links'} to={'/'} >
     <FaHome/>
     <h4>home</h4>
    </NavLink>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
