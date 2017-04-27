import React from 'react';
import ReactDOM from 'react-dom';


const header = <nav id="mainNav" className="navbar navbar-default" role="navigation">
	  			<div className="container">
	  				<div id="wwuLogoSec" className="navbar-header">
	  					<a className="navbar-brand" href="index.html">
	  						<img src="assets/images/WWU-logo-new.svg" width="100%" className="img-responsive" alt="WWU Logo" />
	  					</a>
	  				</div>
	  			</div>
	  		</nav>;


const mainContainer =<article id="homeHero" className="col-xs-12 col-md-12">
					<img id="wwuDesk" src="assets/images/WWU-footprint-all.svg" width="100%" />
					<img id="wwuMob" src="assets/images/WWU-footprint-mob.png" width="100%" />
				
			
					<p className="homePara1">
						Good shoes take you good places. That’s why <span>Walk With Us NYC</span> is stepping up. We’re a <span>not-for-profit</span> that supplies brand-new footwear and socks to our city’s homeless community of children, women and men. 
					</p>
					<h3 className="comingSoonTxt"> 
						Full website coming soon
					</h3>

					<a href="https://www.crowdrise.com/walk-with-us-nyc/fundraiser/stephenmcardle" 
						id="button1" className="btn primary-btn downBtn" target="_blank">
						Donate now
					</a>
					
					<a href="mailto:info@walkwithus.org" 
						id="button2" className="btn primary-btn downBtn" target="_blank">
						Contact
					</a>
				</article>;

const footer = <footer>
	<p className="copyrightTxt">
		Walk With Us NYC is a registered 501 (c) (3) <span>tax-exempt</span> <span>not-for-profit</span>. 
	</p>
	<p className="copyrightTxt">
		Designed & Developed by <a href="http://www.realestatearts.com/" target="_blank">REA</a>
	</p>
</footer>;


ReactDOM.render(
  header,
  document.getElementById('header')
);

ReactDOM.render(
 mainContainer,
  document.getElementById('homeRow1')
);

ReactDOM.render(
 footer,
  document.getElementById('footer')
);

