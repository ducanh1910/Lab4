import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Navigation from './components/Navigation';
import {
  Routes,
  Route,
} from "react-router-dom";
import FilmsWithMap from './components/FilmsWithMap';
import DetailFilms from './components/DetailFilms';
import News from "./components/News";
import About from './components/About';
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';
import Protected from './components/Protected';
import Dashboard from './components/Dashboard';
function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<FilmsWithMap />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:id' element={<DetailFilms />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* <Route path='/add' element={<Add />}></Route>
        <Route path='/edit' element={<Edit />}></Route>  */}

      </Routes>

      <Footer />
    </>
  )
}
export default App;

