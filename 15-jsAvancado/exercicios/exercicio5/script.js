

function promessa() {
  return new Promise((response, reject) => {
    setTimeout(()=>{
      response(`Ok, promessa resolvida`)
    }, 2000)
  })
}

promessa().then(resolvida => console.log(resolvida))