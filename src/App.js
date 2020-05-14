import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return <h1>{advice}</h1>;
};

export default App;
