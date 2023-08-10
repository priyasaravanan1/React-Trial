import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Details from './ReactRouterComp/Details';
import Education from './ReactRouterComp/Education';
import About from './ReactRouterComp/About';
function App() {
  return (
    <div className="App">
      Hello All
      <BrowserRouter>
      <Routes>
        <Route path='/details' element={<Details/>}> </Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


