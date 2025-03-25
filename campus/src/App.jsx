import { BrowserRouter as Router } from 'react-router-dom';
import CollegeList from './components/CollegeList';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-content">
            <div className="navbar-flex">
              <div className="navbar-title">
                <h1 className="title">🎓 College Platform</h1>
              </div>
            </div>
          </div>
        </nav>
        <main className="main-content">
          <CollegeList />
        </main>
      </div>
    </Router>
  );
}

export default App;
