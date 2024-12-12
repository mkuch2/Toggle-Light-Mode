const button = document.querySelector('#toggle');
const theme = document.querySelector('#theme');
const root = document.documentElement;

root.classList.add('light');

button.addEventListener('click', () => {
  root.classList.contains('light') ? root.className = 'dark': root.className='light'; 
  theme.textContent = root.className;
});