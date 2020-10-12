import React from 'react';


const Header = ()=>{
	return (
		<header>
			<img src="images/mobilecover.png" alt="" className="cover-img hide-mobile"/>
			<img src="images/tabcover.png" alt="" className="cover-img hide-tab"/>
			<img src="images/desktopcover.png" alt="" className="cover-img hide-desktop"/>
			<div className="cover">
				<ul className="top-bar wrapper">
					<li>
						<div id="logo-wrapper">
							<img src="images/logo.svg" alt="logo" className="logo w-100"/>
							<p className="logotext text-center">VEE CLOTHING COMPANY</p>
						</div>
					</li>
					<li className="ml-auto"><img src="images/lightmode.svg" alt="toogle lightmood" className="w-50 mt-auto mb-auto"/></li>
				</ul>
				<div className=" wrapper cover-wrap">
					<p className="cover-text">
						We tailor your clothing<br/> so you make a<br/> difference
					</p>
					<ul className="d-flex cover-text text-extra">
						<li className="mr-3  rm-tx-dec">CLASS</li>
						<li className="mr-3 cust-mr">VIBRANCY</li>
						<li className="cust-mr">SIMPLICITY</li>
					</ul>
					<ul className="btn-wrapper">
						<button className="custom-btn white-btn"><a href="{}">Contact us</a></button>
						<button className="custom-btn red-btn"><a href="{}">Subscribe to newsletters</a></button>
					</ul>
				</div>
			</div>	
		</header>
	)
}

export default Header;