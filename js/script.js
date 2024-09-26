const button = document.getElementById('btn');
const text = document.querySelector('.color')

const colors = [
    '#fc0a0a',
    '#0a36fc',
    '#b3fc0a',
    '#b70afc',
    '#0afce8',
];

button.addEventListener('click', () => {
    let hexColor = colors[getRandom()];
    document.body.style.backgroundColor = hexColor;
    text.textContent = hexColor;
})

function getRandom() {
    return Math.floor(Math.random() *colors.length);
}