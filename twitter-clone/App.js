import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Tweets from './Tweets';
import Trends from'./Trends';


function App()

    {
    return(
    
        <div  className="twitter">
         <Sidebar/>
         <Tweets/> 
         <Trends/>
        
        </div>

    
    );
}
    

export default App;