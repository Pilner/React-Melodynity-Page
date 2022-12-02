import React from 'react'
import '../../stylesheets/semantics/navbar.css'
import MelodynityLogoFull from '../../images/melodynitylogo-full.png'
import MelodynityLogoShort from '../../images/melodynitylogo-short.png'

const Navbar = () => {
  return (
	<header id="navbar">
		<nav className="container">
			<div>
				  <a href="/"><img className='navLogo' src={MelodynityLogoFull} alt="Melodynity Logo" /></a>
				  <ul class>
					  <a href="/"><li class="navlink">Home</li></a>
					  <a href="/about"><li class="navlink">About</li></a>
					  <a href="/contact"><li class="navlink">Contact</li></a>
				  </ul>
			</div>
		</nav>
	</header>	
  );
}

export default Navbar;