import React from 'react';
import SideMenu from './Components/Menu'
import {Header} from 'semantic-ui-react'

import './App.css';

function App() {
  const headerStyle ={
     padding: '20px'
  }
  return (
    <React.Fragment>
      <Header textAlign='center' as='h1' size="huge" color='violet' style={headerStyle}>Check Your Weather</Header>
      <SideMenu/>
    </React.Fragment>
      
   
  );
}

export default App;
