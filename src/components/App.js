import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../styles/global.css';

import NavItem from './Nav/NavItem';
import Ipsum from './Ipsum';
import List from './List';
import Button from './Button';
import Image from './Image';

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
			// loadingImg: false,
			ipsum: ``,
			copied: false
		};
		this.fetchIpsum = this.fetchIpsum.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.copyHandler = this.copyHandler.bind(this);
		this.refreshHandler = this.refreshHandler.bind(this);
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
		// this.setState({ loadingImg: true });
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
			activeImg: img,
			loadingImg: false,
			copied: false
		}));
	}

	copyHandler() {
		console.log('from copy handler');
		this.setState({ copied: true });
	}

	refreshHandler() {
		let newIpsum = this.fetchIpsum(this.state.active);
		this.setState((state) => ({
			...state,
			ipsum: newIpsum,
			copied: false
		}));
	}

	componentDidMount() {
		this.refreshHandler();
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

		let currentImage = this.state.items.map((el, i) => {
			if (this.state.items[i].img === this.state.activeImg) {
				return <Image imageURL={this.state.activeImg} active={this.state.active} />;
			}
		});

		return (
			<div className='App-container'>
				{currentImage}
				<section className='App-content'>
					<div className='Content-menu'>
						<div className='Nav'>{items}</div>
					</div>
					<header>
						<h1>Travel Ipsum</h1>
						<p className='description'>Placeholder text for those who love travel</p>
					</header>
					<main>
						<div className='Controls'>
							<CopyToClipboard text={this.state.ipsum} onCopy={this.copyHandler}>
								<button className='Copy-btn'>{this.state.copied ? 'Copied' : 'Copy All'}</button>
							</CopyToClipboard>
							<Button name='Refresh' className='Refresh-btn' click={this.refreshHandler} />
						</div>
						<div className='Ipsum-container'>
							<Ipsum ipsum={this.state.ipsum} />
						</div>
					</main>
				</section>
			</div>
		);
	}
}

export default App;
