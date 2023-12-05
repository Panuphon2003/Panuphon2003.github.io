const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset &&  top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}   
function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            let imageUrl = data.message;
            let dogImageElement = document.getElementById('dogImage');
            dogImageElement.src = imageUrl;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function updateDisplay() {
    let input = document.getElementById('inputField').value;
    let lastChar = input.charAt(input.length - 1);
    if (!(/[0-9.\/\*\-\+^]/.test(lastChar))) {
        document.getElementById('inputField').value = input.slice(0, -1);
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        calculate();
        document.getElementById('inputField').value = '';
    }
}

function clearDisplay() {
    document.getElementById('inputField').value = '';
    document.getElementById('outputField').value = '';
}

function calculate() {
    let expression = document.getElementById('inputField').value;
    try {
        let result = eval(expression);
        document.getElementById('outputField').value = result;
    } catch (error) {
        document.getElementById('outputField').value = 'Error';
    }
}