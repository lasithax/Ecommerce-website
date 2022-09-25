import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SellerHome from "./SellerHome";
import MostRated from "./MostRated";
import UpdateItem from "./UpdateItem";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/about"></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/seller-home" element={<SellerHome />}></Route>

          <Route path="/most-rated-items" element={<MostRated />}></Route>

          <Route path="/update-item" element={<UpdateItem />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
