import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import TodoList from './pages/TodoList';

// Components
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
