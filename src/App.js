import './App.css';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Security & OAuth Demo</h1>
      {/* <Login /> */}

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/dashboard' element={<Dashboard/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
