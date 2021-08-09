

const button = document.querySelector(`#button`)
const messageInput = document.querySelector(`#message`)
const showMessage = document.querySelector(`#show-message`)
const loading = document.querySelector(`#loading`)
const divAll = document.querySelector(`#all`)

function addHide (element) {
  element.classList.add(`hide`)
}
function removeHide (element) {
  element.classList.remove(`hide`)
}

function buttonClick () {
  button.onclick = () => {
    addHide(button)
    removeHide(loading)
    setTimeout(() => {
      addHide(divAll)
      removeHide(showMessage)      
    }, 5000)
  }
}

function exercise () {
  return new Promise ((resolve, reject) =>{
    
    messageInput.onchange = (evento) => {
      const message = evento.target.value
      showMessage.innerHTML = message

      resolve()
    }
    
  })
}

exercise().then(buttonClick)
