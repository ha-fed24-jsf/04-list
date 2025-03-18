import './AnimalFact.css'

const AnimalFact = ({ facts }) => (
	<section className="animal-fact">
		<p> Animal: {facts.name} </p>
		<p> Sound: {facts.sound} </p>
		<p> The {facts.name} has {facts.legs} legs and {facts.hasTail ? 'a' : 'no'} tail. </p>
	</section>
)

export default AnimalFact
