const readline = require("readline");

const calcInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const validOperators = [
	"*",
	"-",
	"+",
	"/",
];

calcInterface.question("Masukkan bilangan ke-1: ", (firstInput) => {
	const firstNumber = Number(firstInput);
    console.log(firstNumber);
	if(isNaN(firstNumber)) {
		console.log("Masukkan Angka!");
		return calcInterface.close();
	}

	console.log('=============================================================');
	console.log (" Masukkan: " + " Tambah (+) " + " Kurang (-) " + " Kali (*) " + " atau " + " Bagi (/) ")

	calcInterface.question("Masukkan operator: ", (operatorInput) => {
		if(!validOperators.includes(operatorInput)) {
			console.log("Operator salah");
			return calcInterface.close();
		}
	console.log('=============================================================');
