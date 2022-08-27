import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
  return (
      <div className="app">
        <Header/>
        <Home/>
      </div>
  )
}

export default App;

/*

      <Router>
        <Header />
        <div className="container">

          <Routes>
            <Route exact path="/" element={
              <>
              </>
            }>
            </Route>
            

            <Route path="/about" element={}/>
          </Routes>

        </div>
      </Router>
*/