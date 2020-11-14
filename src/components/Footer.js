import React, {Component} from 'react';

class Footer extends Component{
	render(){
		const footerBackground = {
			background: '#7E0A0A',
			// filter: 'saturate(50%)',
			color: 'rgba(255, 255, 255, 0.85)',
		}
		const polygon ={
			// background: 'linear-gradient(32deg, #000000 50%, #FFFFFF 50%)',
			// height: '50px',
			// width: '80px',
			// position: 'absolute',
			// right: '0%',
			// marginTop: '-71px',

			
		}
		const iconColor ={
			background: '#892B2B'
		}
		return (
			<footer style={footerBackground} className="foot">
				<div className="wrapper">
					<div>
						<img src="images/logo.svg" alt="company logo" className="footer-logo"/>
						<p className="company text-center my-2">VEE CLOTHING COMPANY</p>
						<div style={polygon} className="polygon"></div>
					</div>
					<ul className="footer-nav">
						<li><a href="#About">About us</a></li>
						<li><a href="#Services">Services</a></li>
						<li><a href="#Collections">Collections</a></li>
						<li><a href="https://wa.me/+2348103031020" target="link">Contact</a></li>
						<li><a href="https://wa.me/c/2348103031020" target="link">Catalogue</a></li>
					</ul>
					<ul className="socials">
						<li><a href="http://facebook.com/veeclothingcompany" target="link"><img src="images/facebook.svg" alt="facebook logo" className="social-icons" style={iconColor}/></a></li>
						<li><a href="http://instagram.com/veeclothingcompany" target="link"><img src="images/instagram.svg" alt="instagram logo" className="social-icons" style={iconColor}/></a></li>
						<li><a href="https://wa.me/+2348103031020" target="link"><img src="images/whatsapp.svg" alt="whatsapp logo" className="social-icons" style={iconColor}/></a></li>
						<li><a href="http://twitter.com/veeclothingcomp" target="link"><img src="images/twitter.svg" alt="twitter logo" className="social-icons" style={iconColor}/></a></li>
					</ul>
					<p className="copyright text-center my-0">
						Copyright &copy; Vee Clothing Company 2020. All Rights Reserved
					</p>

				</div>
			</footer>	
		)
	}
}

export default Footer