import React from 'react';
import { Wrapper } from './styles';
import TW from '../../assets/twitter.svg';
import GH from '../../assets/github.svg';
import LI from '../../assets/linkedin.svg';
import TL from '../../assets/telegram.svg';

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<p>
				<a href='https://thulina2004.netlify.app/' target='_blank' rel='noopener noreferrer'>
					Thulina Perera
				</a>{' '}
				&copy; {new Date().getFullYear()}
			</p>
			<div className='contact'>
				<a href='https://github.com/mhflk' target='_blank' rel='noopener noreferrer'>
					<img src={GH} alt='Github' />
				</a>
				<a href='https://t.me/endham' target='_blank' rel='noopener noreferrer'>
					<img src={TL} alt='Twitter' />
				</a>
				<a href='https://wa.me/qr/Q4VXDDGTICEDC1' target='_blank' rel='noopener noreferrer'>
					<img src={LI} alt='LinkedIn' />
				</a>
			</div>
		</Wrapper>
	);
};

export default Footer;
