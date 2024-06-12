// import css
import logo from './assets/images/CSM_Logo.png';
import Footer from './components/footer/footer';
import React from 'react';

// logs current path
console.log("Current path: " + window.location.pathname);

console.log(logo);

function App() {

  //const [data, setData] = useState(null);

  return (
    <React.Fragment>
      <div className="wrapper">
        <img src={logo} alt="CSMaritimo" className="img-fluid mx-auto d-block rounded-pill" width="200" height="200"/>
        <form action="/login" method="get">
          <button type="submit" className="btn rounded-pill log">Login</button>
        </form>
      </div>


      <Footer />
    </React.Fragment>
      
    
  );
}

export default App;
