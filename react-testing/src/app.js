import React from 'react';
import Header from './component/header/header';
import Headline from './component/headline.js/head-line';
import './app.css';


  const App = () => {
      return (
          <> 
             <Header />
             <Headline header = 'Posts' desc = 'click  the button to render'/>
          </>
      )
  }


export default App;
  