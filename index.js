import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import style from './style.scss';
import Client from './src/Client';
class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="main-div">
				<Client />
			</div>
		);
	}
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
