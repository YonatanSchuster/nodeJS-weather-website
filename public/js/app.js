const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messegeOne = document.querySelector('#message-1')
const messegeTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messegeOne.textContent = 'Loading...'
    messegeTwo.textContent = ''

    fetch('/weather?address='+ location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messegeOne.textContent = data.error
        } else {
            messegeOne.textContent = data.location
            messegeTwo.textContent = data.forecast
            
        }
    })
})
})