import React, { useEffect, useRef } from 'react';
import './HeroArea.scss';
import '../../styles/global.scss';
import { ReactComponent as Logo } from '../../assets/svg/siteLogo.svg';
import SocialIcons from './SocialIcons';
import lottie from 'lottie-web';

function HeroArea() {
	const container = useRef(null);
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: require('../../assets/headerAnimation/animation.json'),
		});
	}, []);
	return (
		// <div className="hero" ref={container}>
		<div className="hero">
			<div className="hero-container">
				<div className="hero-animation" ref={container}></div>
				<Logo className="hero-img"></Logo>

				<div className="social-icons-main">
					<SocialIcons></SocialIcons>
				</div>
			</div>
		</div>
	);
}
export default HeroArea;
