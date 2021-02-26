import React from 'react';
import './App.css';
import HomeContainer from './container/HomeContainer';
import HeaderContainer from './container/HeaderContainers';
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
