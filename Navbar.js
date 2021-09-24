import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
// import Logo from '../../assets/svg/siteLogo.svg';
import './Navbar.scss';
import { ReactComponent as Logo } from '../../assets/svg/siteLogo.svg';
class Navbar extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<nav className="NavbarItems">
				<Logo className="navbar-logo" fill=" #160e50"></Logo>
				{/* <img className="navbar-logo" src={Logo} alt=" Logo" /> */}

				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		);
	}
}
export default Navbar;
