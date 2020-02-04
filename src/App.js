import React, { Component } from 'react';
import Title from './components/Title';
import Menu from './components/Menu';

const Head = 'Md. Nazmus Sakib';

class App extends Component {
	render() {
		return (
			<div>
				<Menu />
				<div className="section">
					<div className="columns is-centered">
						<div className="column is-12">
							<div className="hero is-info has-text-centered">
								<div className='hero-body'>	
									<h2 className='title'>{Head}</h2>
									<Title />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;