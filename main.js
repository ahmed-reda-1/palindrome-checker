let input = document.getElementById('text-input');
let checkBtn = document.getElementById('check-btn');
let result = document.getElementById('result');

checkBtn.onclick = () => {
	let originalText = input.value;

	if (originalText === '') {
		alert('Please Input Value');
		return;
	}

	let cleanedInput = originalText.toLowerCase().replace(/[^a-z0-9]/g, '');

	let reversedInput = cleanedInput.split('').reverse().join('');

	if (cleanedInput === reversedInput) {
		result.style.color = 'green';
		result.innerHTML = `"${originalText}" is a palindrome`;
	} else {
		result.style.color = 'red';
		result.innerHTML = `"${originalText}" is not a palindrome`;
	}
	input.value = '';
};
