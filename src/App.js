import React from 'react';
import './App.css';
import './customCss/home.css';

import logop from './images/logo.png';
import fondo from './images/descarga.svg'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logop} className="home-logo" alt="Logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav mr-auto">
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <a className="btn btn-primary my-2 my-sm-0" href="http://prescriptiva.co/" >Know more</a>
          </form>
        </div>
      </nav>


      <div>

        <h2>We transform data into strategies</h2>
        <img src={fondo} className="fondo" alt="Logo" />

        <form className="rigthform">

          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-4 col-form-label"><h1>
              Company name </h1></label>
            <div className="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" placeholder="Company name" />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" class="col-sm-4 col-form-label"><h1> Email </h1></label>
            <div className="col-sm-10" >
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>



          <div className="form-group row">
            <label for="exampleFormControlTextarea1" className="col-sm-4 col-form-label"><h1> Description </h1></label>
            <div className="col-sm-10">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
          </div>

          <div className="form-group row">
            <input type="file" className="form-control-file" id="exampleFormControlFile1" />

          </div>

          <button type="submit" class="btn btn-primary mb-2">Send Information</button>


        </form>


      </div>



    </div >



  );
}

export default App;
