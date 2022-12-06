import logo from './logo.svg';
import './App.css';
import {useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";

// react-router
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// toast
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from 'firebase/compat/app';
import 'firebase/auth'

// components
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import {UserContext} from "./Context/UserContext";
import Footer from './Layout/Footer';
import Header from './Layout/Header';

import firebaseConfig from './Config/firebaseConfig';
// init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  // default value for the user will be null or else it will not work properly.
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </Router>    
  );
}

export default App;
