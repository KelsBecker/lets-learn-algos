const button = document.querySelector('button')
const inspo = document.querySelector('.inspo')

document.addEventListener('DOMContentLoaded', () => {
  handleClick()
})

const handleClick = () => {
  button.addEventListener('click', () => {
    let quote = document.createElement('p')
    quote.innerText = 'GET IT GIRL!!!'
    inspo.append(quote)
  })
}