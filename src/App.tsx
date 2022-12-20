import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes,
  Route,Navigate} from "react-router-dom";
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
        <Route  path="/" element={<Home />} />
          <Route  path="/restaurantslist" element={<RestaurantsList />} />
          <Route  path="/signin" element={<SignIn/>} />
         <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
