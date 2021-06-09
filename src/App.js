import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import Content from './components/Content';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
// import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './pages';
import Menu from './pages/menu';
import About from './pages/about';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
