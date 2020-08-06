import React from 'react';
import './styles.css';
import Header from './components/Header.component';
import ShortListCard from './components/ShortListCard.component';

export default function App() {
  return (
    <div className="App">
      <Header />
      <ShortListCard />
    </div>
  );
}
