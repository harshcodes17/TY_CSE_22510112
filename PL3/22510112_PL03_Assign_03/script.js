function calculateSum() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc + num;
        }
        return acc;
    }, 0);
    document.getElementById('result').innerText = `Sum of even numbers: ${sum}`;
}
