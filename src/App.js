import './App.css';
import MovieMain from './components/MovieMain';
import SignIn from './components/auth/signin';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <span className={"brand"}>Movie Trailer App</span>
        <Link to="/components/auth/signin"><button className='navButton'>Login</button></Link>
        <Link to="/components/MovieMain"><button className='navButton'>Movies</button></Link>

        
      </header>

      <body className='body'>

      <div className="containerMain">
      <Routes>
          <Route path="/components/auth/signin" element={<SignIn />} />
          <Route path="/components/MovieMain" element={<MovieMain />} />
        </Routes>
        
      </div>
        </body>

    </div>
  );
}

export default App;
