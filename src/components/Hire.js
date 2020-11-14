import React from 'react';
const HireUs = () =>{
	const check = {
		background: 'url(images/check.svg) no-repeat 0 0',
		backgroundPosition: 'left center',
		margin: 'auto', paddingLeft: '20px',
		listStyle: 'none'
		
	}
	return (
		<section id="Contact">
			<section className="wrapper m-auto pt-5 pb-5">
				<h1 className="heading">Why choose us?</h1>
				<div className="underline m-auto"></div>
				<p className="paragraph m-auto para-2 text-center pt-3 pb-5">
					We understand that there are many fashion companies out there that may seem 
					to offer the services we offer, but here are some few reasons why choosing us will be the best choice
				</p>
				<div className="hire-us">
					<div>
						<ul className="points mt-auto mb-auto">
							<li style={check}>
								<p className="list-para">
									We have expert tailors that work at their best to make sure clients satisfaction is met for that is our atmost concern
								</p>
							</li>
							<li style={check}>
								<p className="list-para">
									Our customer service is always at your service and kind because we put our clients in high esteem, we know without you we won’t be here.
								</p>
							</li>
							<li style={check}>
								<p className="list-para">
									We use high quality fabrics for any of our jobs. We know the value of good fabrics and we have eyes for it because we know that’s what you will want.
								</p>
							</li>
							<li style={check}>
								<p className="list-para">
									Our services are affordable, swift and original to the core. At a very affordable rate, we offer the best that will leave our clients satisfied
								</p>
							</li>
						</ul>
						<div className="w-100 d-flex justify-content-center justify-content-md-start">
							<button className="custom-btn red-btn m-0"><a href="https://wa.me/+2348103031020" target="link">Contact Us</a></button>
						</div>
					</div>
					<div>
						<img src="images/hire-mobile.png" alt="sewing tools" className="hide-mobile mt-5 mb-auto mr-auto ml-auto"/>
						<img src="images/hire-tab.png" alt="sewing tools" className="hide-tab m-auto"/>
						<img src="images/hire-desktop.png" alt="sewing tools" className="hide-desktop m-auto w-50"/>
					</div>
				</div>
			</section>
			<section className="hire m-auto py-5">
				<h1 className="heading">Hire me for your awesome jobs</h1>
				<p className="paragraph para-1 text-center m-auto">
					 Vee clothing company is all about making our clients satisfied and this we do with the help of our expert designers. We offer quality services to you without having to break your bank.
				</p>
				<div className="w-100 d-flex justify-content-center mt-3">
					<button className="custom-btn red-btn m-0 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s"><a href="https://wa.me/+2348103031020" target="link"> Hire me</a></button>
				</div>
			</section>
		</section>
		
	)
}

export default HireUs