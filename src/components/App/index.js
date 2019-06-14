import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

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
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      {routes.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </main>
  );
}

export default App;
