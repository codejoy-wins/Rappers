import React from 'react';
import falseData from './falseData';
import Rap from './Rap';
import Footer from './Footer';

import './App.css';

function App() {

  const stuff = falseData.map(rapper=><Rap magic={rapper} key={rapper.id}/>);

  return (
    <div className="App">
      {stuff}
      <Footer />
    </div>
  );
}

export default App;