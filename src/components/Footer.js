import React from 'react';
// import App from './App';
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
			<div className='flex space-x-6 items-center h-10'>
				{icons.map((icon, i) => (
					<div key={i++}>
						<a
							href={icon.link}
							key={icon.name}
							target='__blank'
							rel='noopener noreferrer'
							className="w-25 h-25"
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
