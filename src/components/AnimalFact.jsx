import './AnimalFact.css'

const AnimalFact = ({ facts, deleteAnimal, editAnimal }) => (
	<section className="animal-fact">
		<p> Animal: {facts.name} </p>
		<p> Sound: {facts.sound} </p>
		<p> The {facts.name} has {facts.legs} legs and {facts.hasTail ? 'a' : 'no'} tail. </p>
		<button onClick={() => deleteAnimal(facts.id)}> Delete </button>
		<button onClick={() => editAnimal(facts.id)}> More legs! </button>
	</section>
)

export default AnimalFact
