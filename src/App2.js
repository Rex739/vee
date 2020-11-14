import React, {Component} from 'react';
import HireUs from './components/Hire';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
// local css
import './containers/css/vee.css';
// global css
import './containers/css/bootstrap.min.css';
import './containers/css/bootstrap-grid.min.css';
import './containers/css/animate.css';


class App2 extends Component{
  render(){
    return(
        <div className="vee">
	        <HireUs />
	        <Newsletter />
	        <Footer />
    	</div>
    )
  }
}

export default App2;
