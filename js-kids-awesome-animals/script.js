let animals = ["Monkey", "Elephant", "Goose", "Dog", "Cat"];

for (let i = 0; i < animals.length; i++){
	animals[i] = `Awesome ${animals[i]}`;
}

console.log(animals);