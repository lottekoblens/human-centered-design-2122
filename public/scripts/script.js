const form = document.getElementById('trainingInput');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    saveFormInput()
})

const saveFormInput = () => {
    let input = document.getElementById("input").value;
    document.getElementById('result').textContent = 'Notities van training: ' + input;
}