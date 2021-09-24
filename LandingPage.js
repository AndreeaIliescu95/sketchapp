import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroArea from '../HeroArea/HeroArea';
import MainSection from '../Main/index';
import Footer from '../Footer/index';

function LandingPage() {
	return (
		<>
			{' '}
			<Navbar />
			<HeroArea />
			<MainSection />
			<Footer />
		</>
	);
}

export default LandingPage;
