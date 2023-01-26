import './App.css';
import MovieMain from './components/MovieMain';
import Login from './components/Login';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span className={"brand"}>Movie Trailer App</span>
        <Link to="/components/Login"><button className='loginButton'>Login</button></Link>
        <Link to="/components/MovieMain"><button className='movieButton'>Movies</button></Link>

        
      </header>

      <body className='body'>

      <div className="containerMain">
        <Routes>
          <Route path="/components/Login" element={<Login />} />
          <Route path="/components/MovieMain" element={<MovieMain />} />
        </Routes>
      </div>
          
      </body>

    </div>
  );
}

export default App;
