import React, { Component } from 'react';

import '../styles/global.css';

import NavItem from './Nav/NavItem';
import Ipsum from './Ipsum';
import List from './List';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					name: 'Paris',
					img:
						'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1549&q=80'
				},
				{
					name: 'Rome',
					img:
						'https://images.unsplash.com/photo-1517993873665-f7a8c5021470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80'
				},
				{
					name: 'Barcelona',
					img:
						'https://images.unsplash.com/photo-1533675427724-01a3a2b507d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
				},
				{
					name: 'San Francisco',
					img:
						'https://images.unsplash.com/photo-1547191185-52e112942fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
				},
				{
					name: 'New York',
					img:
						'https://images.unsplash.com/photo-1549654747-1fe362f45d7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
				}
			],
			active: 'Paris',
			activeImg:
				'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1549&q=80',
			ipsum: `Paris' monument-lined boulevards, museums, classical bistros and boutiques are
            enhanced by a new wave of multimedia galleries, creative wine bars, design shops and
            tech start-ups. Wine-producing grapevines flourish in parks such as the Parc de
            Belleville, with elevated city views, and the Parc de Bercy, adjacent to the former
            wine warehouses on Cour St-Émilion that now house shops and restaurants making up
            Bercy Village. Paris' monument-lined boulevards, museums, classical bistros and
            boutiques are enhanced by a new wave of multimedia galleries, creative wine bars,
            design shops and tech start-ups. Paris' monument-lined boulevards, museums,
            classical bistros and boutiques are enhanced by a new wave of multimedia galleries,
            creative wine bars, design shops and tech start-ups. Adjacent to the Louvre, the
            elegant Jardin des Tuileries sees plenty of visitors. I love that this bistro in the
            Saint Germain neighborhood, in the 6th arrondissement, has been here forever.
            Cézanne drank here. So did Picasso. And Jim Morrison. The works of French Romantic
            artist Eugène Delacroix can be found in the Louvre, for instance, but also at the
            delightful Musée National Eugène Delacroix. The works of French Romantic artist
            Eugène Delacroix can be found in the Louvre, for instance, but also at the
            delightful Musée National Eugène Delacroix. Wine-producing grapevines flourish in
            parks such as the Parc de Belleville, with elevated city views, and the Parc de
            Bercy, adjacent to the former wine warehouses on Cour St-Émilion that now house
            shops and restaurants making up Bercy Village. Adjacent to the Louvre, the elegant
            Jardin des Tuileries sees plenty of visitors. Wine-producing grapevines flourish in
            parks such as the Parc de Belleville, with elevated city views, and the Parc de
            Bercy, adjacent to the former wine warehouses on Cour St-Émilion that now house
            shops and restaurants making up Bercy Village. Paris' monument-lined boulevards,
            museums, classical bistros and boutiques are enhanced by a new wave of multimedia
            galleries, creative wine bars, design shops and tech start-ups. I love that this
            bistro in the Saint Germain neighborhood, in the 6th arrondissement, has been here
            forever. Cézanne drank here. So did Picasso. And Jim Morrison. I love that this
            bistro in the Saint Germain neighborhood, in the 6th arrondissement, has been here
            forever. Cézanne drank here. So did Picasso. And Jim Morrison. A 40-minute train
            journey southwest of the city, the opulent Château de Versailles is a hugely popular
            day trip. Wine-producing grapevines flourish in parks such as the Parc de
            Belleville, with elevated city views, and the Parc de Bercy, adjacent to the former
            wine warehouses on Cour St-Émilion that now house shops and restaurants making up
            Bercy Village. I love that this bistro in the Saint Germain neighborhood, in the 6th
            arrondissement, has been here forever. Cézanne drank here. So did Picasso. And Jim
            Morrison. Wine-producing grapevines flourish in parks such as the Parc de
            Belleville, with elevated city views, and the Parc de Bercy, adjacent to the former
            wine warehouses on Cour St-Émilion that now house shops and restaurants making up
            Bercy Village. Modern and contemporary art is showcased at the comprehensive Centre
            Pompidou's Musée National d'Art Moderne but also at smaller venues like the city-run
            Musée d’Art Moderne de la Ville de Paris. A 40-minute train journey southwest of the
            city, the opulent Château de Versailles is a hugely popular day trip.`
		};
		this.fetchIpsum = this.fetchIpsum.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	fetchIpsum(val) {
		const pars = 5;
		const sents = 5;
		let newIpsum = '';
		let listName = Array.from(val)
			.filter((el) => {
				return el !== ' ';
			})
			.join('');
		for (let i = 0; i < pars; i++) {
			for (let j = 0; j < sents; j++) {
				newIpsum += List[listName][Math.floor(Math.random() * List[listName].length)];
			}
		}
		return newIpsum;
	}

	clickHandler(e) {
		let val = e.target.textContent;
		let img = '';
		this.state.items.map((el) => {
			if (el.name === val) img = el.img;
			return el.name === val;
		});
		let newIpsum = this.fetchIpsum(val);
		this.setState((state) => ({
			...state,
			active: val,
			ipsum: newIpsum,
			activeImg: img
		}));
	}
	render() {
		const items = this.state.items.map((el) => {
			return (
				<NavItem
					key={el.name}
					itemName={el.name}
					active={el.name === this.state.active}
					img={el.img}
					click={this.clickHandler}
				/>
			);
		});

		return (
			<div className='App-container'>
				<section className='App-content'>
					<div className='Content-main'>
						<header>
							<h1>Travel Ipsum</h1>
							<p className='description'>Placeholder text for those who love travel</p>
						</header>
						<main>
							<div className='Controls'>
								<button className='Control-btn'>Refresh</button>
								<button className='Control-btn'>Copy</button>
							</div>
							<div className='Ipsum-container'>
								<Ipsum ipsum={this.state.ipsum} />
							</div>
						</main>
					</div>
					<div className='Content-menu'>
						<div className='Nav'>{items}</div>
					</div>
				</section>
				<div
					className='App-image-container'
					style={{ background: `url(${this.state.activeImg}) bottom center / cover no-repeat` }}
				/>
			</div>
		);
	}
}

export default App;
