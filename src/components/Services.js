import React from 'react';

const Services = () =>{
	return(
		<section id="Services">
			<div className="wrapper m-auto">
				<h1 className="heading text-center">Our services/Expertise</h1>
				<div className="underline m-auto"></div>
				<p className="paragraph text-center service-para m-auto pt-3 pb-5">
					Here is a list of the services we offer. We also allow for personalization (custom made to specifications)
				</p>
				<div className="services-wrapper">
					<div className="services-container ">
						<img src="images/services-img1.png" alt="suit making" className="services-img m-auto d-flex"/>
						<p className="services text-center">Suit</p>
					</div>
					<div className="services-container">
						<img src="images/services-img4.png" alt="Senators" className="services-img m-auto d-flex"/>
						<p className="services text-center">African attires</p>
					</div>
					<div className="services-container">
						<img src="images/services-img2.png" alt="Joggers and hoodies" className="services-img m-auto d-flex"/>
						<p className="services text-center">Joggers and hoodies</p>
					</div>
					<div className="services-container">
						<img src="images/services-img3.png" alt="Fashionable quality tops" className=" services-img m-auto d-flex"/>
						<p className="services text-center">Fashionable quality tops</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services