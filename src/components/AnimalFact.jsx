const facts = {
	name: 'Fox',
	sound: 'unknown',
	legs: 4,
	hasTail: true
}

const AnimalFact = () => (
	<section className="animal-fact">
		<p> Animal: {facts.name} </p>
		<p> Sound: {facts.sound} </p>
		<p> The fox has facts.legs legs and a {facts.hasTail}. </p>
	</section>
)

export default AnimalFact
