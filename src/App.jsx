import { useState } from 'react'
import './App.css'
import AnimalFact from './components/AnimalFact.jsx'
import { animals } from './data/animals.js'



const App = () => {
	return (
		<div className="column">
		<header>
			Animal facts
		</header>
		<main>

		{animals.map( animal => (
			<AnimalFact key={animal.id} facts={animal} />
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
