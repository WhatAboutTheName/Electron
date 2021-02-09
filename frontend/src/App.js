import React from 'react';
import { DragAndDrop } from './components/drang-and-drop/drag-and-drop';
import { Content } from './components/content/content';
import './App.scss';

function App() {

  return (
    <div>
        <DragAndDrop />
        <Content />
    </div>
  );
}

export default App;
