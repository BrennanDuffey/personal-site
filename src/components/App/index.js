import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => {Home}
  },
  {
    path: '/About',
    exact: true,
    main: () => {About}
  },
  {
    path: '/Portfolio',
    exact: true,
    main: () => {Portfolio}
  },
  {
    path: '/Contact',
    exact: true,
    main: () => {Contact}
  }
]

function App() {
  return (
    <main className="App">
    </main>
  );
}

export default App;
