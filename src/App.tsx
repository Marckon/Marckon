import React from 'react';
import { AppHeader } from './components/AppHeader';
import { PageBackGround } from './components/PageBackGround';
import { PersonalCard } from './components/PersonalCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <PageBackGround />
      <AppHeader />
      <PersonalCard />
    </div>
  );
};

export default App;
