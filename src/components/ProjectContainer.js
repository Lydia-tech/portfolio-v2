import React from 'react';
import Project from '../components/Project';


const projects = [
	{
		title: 'Budget Tracker',
		description: 'Keep track of your budget while on the go!',
		url: 'fathomless-beyond-78323.herokuapp.com',
        img: '/image/budget_tracker.png'
	},
	{
        title: 'Hike Now',
		description: 'Find a trail and the weather when you are out of town!',
		url: 'kohringsw.github.io/hike-now',
        img: '/image/hike-now.png'
	},
	{
        title: 'SLP Goalden',
		description: 'Track your students progress with this application.',
		url: 'mighty-falls-97052.herokuapp.com',
        img: '/image/slp-goalden.png'
	},
	{
        title: 'Book Search Engine',
		description: 'Search for books and save your favorite books.',
		url: 'blooming-brushlands-06691.herokuapp.com',
        img: '/image/book-search-engine.png'
	},
	{
        title: 'Shop Shop',
		description: 'Shop categories and save your items.',
		url: 'mysterious-waters-51355.herokuapp.com',
        img: '/image/shop-shop.png'
	},
	{
        title: 'Work Day Scheduler',
		description: 'Schedule your daily work day with ease.',
		url: 'lydia-tech.github.io/Work-Day-Scheduler',
        img: '/image/work-day-scheduler.png'
	}
];

function ProjectContainer() {
	return (
		<div id='portfolio'>
			<h2>Portfolio:</h2>
			{projects.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</div>
	);
}

export default ProjectContainer;
