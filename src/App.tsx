import './App.css';
import NavComponent from './page/nav/nav';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import ListPraPage from './page/list-pra-page/list-pra-page';
import HomePage from './page/home-page/home-page';

function App() {
  return (
    <div className="App">
      <Router>
      <NavComponent/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/list-pra-page" element={<ListPraPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
