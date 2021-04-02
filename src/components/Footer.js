import React from 'react';
import Github from './github-logo';
import LinkedIn from './linkdin-icon';

const icons = [
	{
		name: 'fab fa-github',
		link: 'https://github.com/Lydia-tech',
		icon: <Github />
	},
	{
		name: 'fab fa-linkedin',
		link: 'https://www.linkedin.com/in/lydiakennedy/',
		icon: <LinkedIn />
	}
];

function Footer() {
	return (
		<footer className='footer'>
			<div style={{display: 'flex'}}>
				{icons.map((icon, i) => (
					<div key={i++}>
						<a
							href={icon.link}
							key={icon.name}
							target='__blank'
							rel='noopener noreferrer'
						>
							{icon.icon}
						</a>
					</div>
				))}
			</div>
		</footer>
	);
}

export default Footer;
