import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { FaPaperPlane } from 'react-icons/fa';

class Client extends Component {
	constructor() {
		super();
		this.state = {
			endpoint: 'http://localhost:4001',

			color: 'white'
		};
	}

	send = () => {
		const socket = socketIOClient(this.state.endpoint);
		socket.emit('change color', this.state.color); // change 'red' to this.state.color
	};

	sendMessage = () => {
		const socket = socketIOClient(this.state.endpoint);
		socket.emit('message', 'ben mesajım');
	};

	setColor = (color) => {
		this.setState({ color });
	};

	render() {
		const socket = socketIOClient(this.state.endpoint);
		socket.on('change color', (col) => {
			document.body.style.backgroundColor = col;
		});

		// 	<button onClick={() => this.send()}>Change Color</button>
		// 	<button id="blue" onClick={() => this.setColor('blue')}>
		// 		Blue
		// 	</button>
		// 	<button id="red" onClick={() => this.setColor('red')}>
		// 		Red
		// 	</button>
		// 	<button onClick={this.sendMessage}>mesajı gonder</button>
		return (
			<div className="main-client">
				<div className="left-client" />
				<div className="right-client">
					<div className="right-top" />
					<div className="right-bottom">
						<input type="text" />
						<button>
							<FaPaperPlane size={25} />
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default Client;
