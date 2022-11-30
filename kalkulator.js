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

			calcInterface.question("Masukkan bilangan ke-2: ", (secondInput) => {
			const secondNumber = Number(secondInput);
            console.log(secondNumber);
			if(isNaN(secondNumber)) {
				console.log("Masukkan Angka!");
				return calcInterface.close();
			}

	console.log('=============================================================');

			const result = calculatorLogic(firstNumber, operatorInput, secondNumber);

			console.log(`Hasilnya adalah: ${result}`);
			calcInterface.close();
		});
	});
});

function calculatorLogic(firstNumber, operator, secondNumber) {
	if(operator === "+") return firstNumber + secondNumber;
	else if(operator === "-") return firstNumber - secondNumber;
	else if(operator === "*") return firstNumber * secondNumber;
	else if(operator === "/") return firstNumber / secondNumber;
}
