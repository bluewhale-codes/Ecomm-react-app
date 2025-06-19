import './App.css';

import Header from './components/layout/Header'
import LoginMain from "./components/User/LoginMain"
import Register from './components/User/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
       <Router>
        <Header/>
        
         <Routes>

            <Route exact path='/login' element ={<LoginMain/>}/>
            <Route exact path='/register' element ={<Register/>}/>
         </Routes>
       </Router>
  );
}

export default App;
