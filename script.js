const form  = document.querySelector('form')
const input = document.querySelector('input')
let status = document.querySelector('.status')
let num;

form.addEventListener('submit', e => {
  e.preventDefault()

  if (!Number(input.value)) {
    status.innerHTML = 'TYPE A NORMAL NUMBER IDIOT!' 
  } else {
    num = input.value

    let numStatus;

    num % 2 === 0 ? numStatus = 'even' : numStatus = 'odd' 

    status.innerHTML = `Status of your number: ${numStatus}`
  }

  form.reset()
})

