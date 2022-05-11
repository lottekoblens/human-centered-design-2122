const form = document.getElementById('trainingInput');
const result = document.getElementById('result');
const buttons = document.getElementsByClassName('button')


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//         console.log('test')
//         buttons[i].classList.add('explode')
//     });
// }

form.addEventListener('submit', (e) => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            console.log('test')
            buttons[i].classList.add('explode')
        });
    }
    e.preventDefault()
    saveFormInput()
})

const saveFormInput = () => {
    let input = document.getElementById("input").value;
    result.classList.remove('hidden')
    result.textContent = 'BADABOOM hier zijn je notities van vandaag: ' + input;
    result.focus()
}