import React from 'react';

const About = ()=>{
	return(
		<section id="About">
			<div className="wrapper about-mobile hide-mobile">
				<h1 className="heading d-flex justify-content-center flex-column">
					About us
					<div className="underline"></div>
				</h1>
				<p className="paragraph text-center d-flex justify-content-center flex-column">
					Renascence is about rebirth.. We are rebranding to become better and a world class brand. <br/> We are assuring our customers both old and new that we are unwavering in our quality, We would always provide the best.<br/>
					The collection would feature a wide variety of attires as we have been working on expanding our catalogue and products... we would be unveiling soon!!!! <br/>
					Stay tuned!!! with love, <br/>
					Vee Clothing Company!!!<br/>	
				</p>
				<div className="w-100 d-flex justify-content-center">
					<button className="custom-btn red-btn m-0"><a href="https://wa.me/+2348103031020">Contact Us</a></button>
				</div>
				<section className="slide">
					<div className="slide-container">
						<img src="images/about-img1.png" alt="About Us Images 1" className="slide-img"/>
						<div className="slide-logo">
							<img src="images/logo.svg" alt="logo" className="logo w-100"/>
							
						</div>
					</div>
					<div className="slide-container">
						<img src="images/about-img2.png" alt="About Us Images 2" className="slide-img"/>
						<div className=" slide-logo">
							<img src="images/logo.svg" alt="logo" className="logo w-100"/>
							
						</div>
					</div>
					<div className="slide-container">
						<img src="images/about-img3.png" alt="About Us Images 2" className="slide-img"/>
						<div className=" slide-logo">
							<img src="images/logo.svg" alt="logo" className="logo w-100"/>

						</div>
					</div>
				</section>
			</div>
			<div className="wrapper about-desktop hide-tab2">
				<div className="grid">
					<div className="about-img-wrapper">
						<img src="images/about-img11.png" alt="About Us Images 1" className="about-img"/>
					</div>
					<div className="about-img-wrapper">
						<img src="images/about-img22.png" alt="About Us Images 1" className="about-img"/>
					</div>
				</div>
				<div>
					<img src="images/about-img33.png" alt="About Us Images 1" className="about-img1"/>
				</div>
				<div className="wrapper-abt">
					<h1 className="heading d-flex justify-start flex-column text-left">
						About us
						<div className="underline"></div>
					</h1>
					<p className="paragraph text-left  d-flex justify-start flex-column mt-lg-5">
						Renascence is about rebirth.. We are rebranding to become better and a world class brand. <br/> We are assuring our customers both old and new that we are unwavering in our quality, We would always provide the best.<br/>
						The collection would feature a wide variety of attires as we have been working on expanding our catalogue and products... we would be unveiling soon!!!! <br/>
						Stay tuned!!! with love, <br/>
						Vee Clothing Company!!!<br/>
					</p>
					<div className="w-100 d-flex justify-start">
						<button className="custom-btn red-btn mt-lg-4"><a href="https://wa.me/+2348103031020" target="link">Contact Us</a></button>
					</div>
				</div>
			</div>	
		</section>
		
	)
}

export default About