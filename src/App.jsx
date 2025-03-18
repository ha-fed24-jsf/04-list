import { useState } from 'react'
import './App.css'
import AnimalFact from './components/AnimalFact.jsx'
import { animals as initialAnimals } from './data/animals.js'



const App = () => {
	// Använd initialAnimals för att börja med några standardvärden
	const [animals, setAnimals] = useState(initialAnimals)
	const [name, setName] = useState('')
	// TODO: lägg till state-variabler för alla egenskaper för alla egenskaper som ska finnas i animal-objektet

	// TODO: flytta ut så mycket som möjligt till andra komponenter - vi sparar detta till senare lektion!
	const handleAddAnimal = () => {
		const newAnimal = {
			id: crypto.randomUUID(),  // hitta på ett unikt ID
			name: name,
			sound: 'no', legs: 0, hasTail: false
		}
		// Kopiera listan och lägg till newAnimal sist
		setAnimals([ ...animals, newAnimal ])
		// console.log('handleAddAnimal körs')
	}
	const handleDeleteAnimal = id => {
		console.log('Du vill ta bort djuret med id=' + id)
		const filtered = animals.filter(animal => animal.id !== id)
		setAnimals(filtered)
	}
	const handleEditAnimal = id => {
		const copy = [ ...animals ]
		const index = copy.findIndex(animal => animal.id === id)
		const original = copy[index]
		copy[index] = { ...original, legs: original.legs + 1}
		setAnimals(copy)
	}

	return (
		<div className="column">
		<header>
			Animal facts
		</header>
		<main>

			<section className="form">
				<p> Add a new animal </p>
				<input type="text" placeholder="Name"
					onChange={event => setName(event.target.value)}
					value={name}
					/>

				<button onClick={handleAddAnimal}> Add it! </button>

				<p>TODO: lägg till input-element för de andra egenskaperna</p>
			</section>

			{animals.map( animal => (
				<AnimalFact
					key={animal.id}
					facts={animal}
					deleteAnimal={handleDeleteAnimal}
					editAnimal={handleEditAnimal}
					/>
			) )}
			{/* {jsxListFromData(animals)} */}

		</main>
		</div>
	)
}
/* <AnimalFact facts={fox} />
<AnimalFact facts={squirrel} />
<AnimalFact facts={salmon} /> */

/*
function jsxListFromData(data) {
	let list = []
	for( let i=0; i<data.length; i++ ) {
		list[i] = (
			<AnimalFact key={data[i].id} facts={data[i]} />
		)
	}
	return list
}
*/
export default App
