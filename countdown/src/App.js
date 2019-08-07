import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { seconds: 0 }
	}

	tick() {
		console.log('1')
		this.setState(state => ({
			seconds: state.seconds + 1
		}))
	}

	componentDidMount() {
		console.log('2')
		this.interval = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		console.log('3')
		clearInterval(this.interval)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<h1>Segundos: {this.state.seconds}</h1>
				</header>
			</div>
		)
	}
}
