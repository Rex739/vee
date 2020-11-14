import React, {Component} from 'react';

class Newsletter extends Component{
	render(){
		return(
			<section className="wrapper m-auto pt-5 pb-5 newsletter" id="newsletter">
				<h1 className="heading-2 text-center">Newsletter</h1>
				<h1 className="heading pb-2 w-100">Don’t miss our updates on new collections</h1>
				<div className="underline-2"></div>
				<p className="paragraph text-center m-auto para-3 pt-4">
					We would like to keep our customers/subscribers updated on what’s trending, topics and styles and promotions when available
				</p>
				<form action="https://veeclothingcompany.us2.list-manage.com/subscribe/post?u=ef3f13c38b2673c2ebedfb4b0&amp;id=b90f925c3b" method="post" name="mc-embedded-subscribe-form" className="text-center d-flex justify-content-center mt-5 mb-5 validate" target="_blank" novalidate>
					<input type="email" placeholder="Enter your email address" className=""  name="EMAIL" id="mce-EMAIL" required/>
					<button className="custom-btn-2 red-btn a">Subscribe</button>
				</form>
				<p className="paragraph text-center m-auto hide-desktop">**We promise we will never spam your account</p>
			</section>
		)
	}
}

export default Newsletter
