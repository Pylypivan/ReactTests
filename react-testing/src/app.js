import React from 'react';
import Header from './component/header/header';
import Headline from './component/headline.js/head-line';
import './app.css';

const temptArr = [{

  name:'Tom',
  lName:'Kent',
  age:23,
  gmail:'tom.kent777@gmail.com',
  status:'student',
  onlineStatus: true
}];


  const App = () => {
      return (
          <> 
             <Header />
             <Headline header = 'Posts' desc = 'click  the button to render' temptArr = {temptArr} />
          </>
      )
  }


export default App;
  