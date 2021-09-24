import React from 'react';
import './HeroArea.scss';
import { ReactComponent as Youtube } from '../../assets/svg/social_youtube.svg';
import { ReactComponent as Facebook } from '../../assets/svg/social_facebook.svg';
import { ReactComponent as Instagram } from '../../assets/svg/social_insta.svg';

function SocialIcons() {
	return (
		<div className="social-icons">
			<ul>
				<li>
					<Instagram width="40" height="40"></Instagram>
				</li>
				<li>
					<Facebook width="40" height="40"></Facebook>
				</li>
				<li>
					<Youtube width="40" height="40"></Youtube>
				</li>
			</ul>
		</div>
	);
}

export default SocialIcons;
