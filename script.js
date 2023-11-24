const menu = document.querySelector('.ham-menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
}); 

const button = document.getElementById('button');
const modal_container = document.getElementById('modal_container');
const submit = document.getElementById('submit');

button.addEventListener('click', () => {
    modal_container.classList.add('show');
});

submit.addEventListener('click', () => {
    modal_container.classList.remove('show');
})

submit.addEventListener('click', () => {
    alert('You are now registered!')
})
    

