import React from 'react'
import './index.css'
import Card from './components/Card'
function App() {
  return (
    <div className="App">
      <div className='part-1'>
        <h1>Todo App</h1>
        <p>Add your list of things you want with our best todo app and make your life easy and organized</p>
      </div>

      <div className='part-2'>
        <div className='scroll-container'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
