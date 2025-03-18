import { useState } from 'react'
import './App.css'
import AnimalFact from './components/AnimalFact.jsx'

const App = () => {
	return (
		<div className="column">
		<header>
			Animal facts
		</header>
		<main>

			<AnimalFact />

		</main>
		</div>
	)
}

export default App
