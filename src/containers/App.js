import React from 'react';
import '../App.css';
import Todo from '../components/Todo';

// función pura
export const handleClick = x => {
  return x + 2;
};

// función impura
export const fetchUser = async () => {
  const result = await fetch('/users')
  const user = await result.json()
};

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
