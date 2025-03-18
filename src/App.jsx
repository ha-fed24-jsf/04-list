import { useState } from 'react'
import './App.css'
import AnimalFact from './components/AnimalFact.jsx'

const fox = {
	name: 'Fox',
	sound: 'unknown',
	legs: 4,
	hasTail: true
}
const squirrel = {
	name: 'Squirrel',
	sound: 'squeek',
	legs: 4,
	hasTail: true
}
const salmon = {
	name: 'Salmon',
	sound: 'blub',
	legs: 0,
	hasTail: true
}

const App = () => {
	return (
		<div className="column">
		<header>
			Animal facts
		</header>
		<main>

			<AnimalFact facts={fox} />
			<AnimalFact facts={squirrel} />
			<AnimalFact facts={salmon} />

		</main>
		</div>
	)
}

export default App
