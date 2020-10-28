//Function expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
    selectElement('.close').classList.add('twist')
})

//Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
})