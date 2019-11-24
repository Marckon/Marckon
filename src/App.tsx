import React from 'react';
import logo from './logo.svg';
import { AppHeader } from './components/AppHeader';
import { PageBackGround } from './components/PageBackGround';

const App: React.FC = () => {
  return (
    <div className="App">
      <PageBackGround />
      <AppHeader />
    </div>
  );
};

export default App;
