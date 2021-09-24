import React from 'react';
import { ReactComponent as Bulb } from '../../assets/svg/bulb.svg';
import { ReactComponent as Boom } from '../../assets/svg/boom.svg';
import { ReactComponent as Atom } from '../../assets/svg/atom.svg';
import { ReactComponent as Rainbow } from '../../assets/svg/rainbow.svg';
import { ReactComponent as Smiley } from '../../assets/svg/smiley.svg';
import { ReactComponent as UnderlineSawtooth } from '../../assets/svg/underlineSawtooth.svg';
import { ReactComponent as UnderlineWaves } from '../../assets/svg/underlineWaves.svg';
import { ReactComponent as UnderlineWind } from '../../assets/svg/underlineWind.svg';
const svg = {
	bulb: Bulb,
	boom: Boom,
	atom: Atom,
	rainbow: Rainbow,
	smiley: Smiley,
	underlineSawtooth: UnderlineSawtooth,
	underlineWaves: UnderlineWaves,
	underlineWind: UnderlineWind,
};

const TextColours = ({ colors, text }) => {
	// 	return (
	// 		<>
	// 			{words.map((word) => {
	// 				if (colors.find((k) => k.keyword === word)) {
	// 					return <p>{word}</p>;
	// 				}
	// 				return word;
	// 			})}
	// 		</>
	// 	);
	// };
	return (
		<div>
			{' '}
			{colors.map((d) => {
				const words = text.split(' ');
				const SVG = svg[d.svg];
				return (
					<div>
						<span>
							bouncy <span className={d.color}>tracks</span>
							<span>{SVG && <SVG width={30} height={30} />}</span>
						</span>
						<div>{words[1]}</div>
					</div>
				);
			})}
			<p>{text}</p>)
		</div>
	);
};

/* {colors.map((d) => {
				const words = text.split(' ');
				const SVG = svg[d.svg];
				return (
					<div>
						<span>
							bouncy <span className={d.color}>tracks</span>
							<span>{SVG && <SVG width={30} height={30} />}</span>
						</span>
						<div>{words[1]}</div>
					</div>
				);
			})}

			<p>{text}</p> */

export default TextColours;
