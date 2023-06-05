import React from 'react'
import NavBar from './Components/NavBar/Navbar'
import './App.css'
import { trending,horror,romance,action,comedy,originals } from './urls'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={trending} title='Trending'/>
        <RowPost url={action} title='Action & Adventure' isSmall/>
        <RowPost url={comedy} title='Comedy' isSmall/>
        <RowPost url={horror} title='Horror' isSmall/>
        <RowPost url={romance} title='Romance' isSmall/>
    </div>
  );
}

export default App;
