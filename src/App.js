import React, {Component} from 'react';
import About from './components/About';
import Services from './components/Services';
import Collections from './components/Collections';
// local css
import './containers/css/vee.css';
// global css
import './containers/css/bootstrap.min.css';
import './containers/css/bootstrap-grid.min.css';
import './containers/css/animate.css';
import Header from './components/header';

class App extends Component{
  render(){
    return(
        <div className="vee">
          <Header />
          <About />
          <Services />
          <Collections />
        </div>
      )
  }
}

export default App;
