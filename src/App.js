import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { value: null }

		this.getDolar = this.getDolar.bind(this)
	}

	getDolar() {
		const day = new Date().getDay()
		const month = new Date().getMonth()
		const year = new Date().getFullYear()
		axios
			.get(
				`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${month}-${day}-${year}%27&$top=1&$skip=0&$format=json`
			)
			.then(
				response =>
					this.setState({
						value: response.data.value[0]['cotacaoCompra']
					})
				// console.log(
				// 	'cotacaoCompra',
				// 	response.data.value[0]['cotacaoCompra']
				// )
			)

		// let valorReal
		// let valorDolarHoje = this.state.value

		// console.log('valorDolar', this.state.value)
		this.converter()

		return
	}

	converter(valor) {
		console.log('dolar')
		valor = this.state.value
		return valor
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Conversor de moedas</h1>
					<h2>{this.state.value}</h2>
					{/* <input type="submit" onClick={this.converter} /> */}
					<button className="button" onClick={this.getDolar}>
						Clique aqui
					</button>

					<blockquote className="Version">
						<small>v0.0.2</small>
					</blockquote>
				</header>
			</div>
		)
	}
}
