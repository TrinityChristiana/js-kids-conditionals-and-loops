const alphabet = "abcdefghijklmnopqrstuvwxyz";
let newString = "";
let i = 0;
while (i < 6){
	newString += alphabet[Math.floor(Math.random() * alphabet.length)];
	i++;
}
console.log(newString);
