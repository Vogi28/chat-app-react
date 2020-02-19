import React from 'react';
import ContacList from './components/ContactList';

let isConnected = true;

function App() {
  return (
    <div className='App'>
      <ContacList status={isConnected} />
    </div>
  );
}

export default App;
