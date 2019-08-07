import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 }
	}

	tick() {
		let countdownDate = new Date('Sep 29, 2020 18:45:00').getTime()

		let now = new Date().getTime()

		let distance = countdownDate - now

		let days = Math.floor(distance / (1000 * 60 * 60 * 24))
		let hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		let seconds = Math.floor((distance % (1000 * 60)) / 1000)

		this.setState({
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		})
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Contador Regressivo</h1>
					<h2>
						{this.state.days} dias {''}
						{this.state.hours} horas {''}
						{this.state.minutes} minutos {''}
						{this.state.seconds} segundos
					</h2>
				</header>
			</div>
		)
	}
}
