import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './component/Home';




function App() {
  return (
    <Router>
       <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
      

      </Routes>
    </div>
    </Router>
   
  );
}

export default App;
