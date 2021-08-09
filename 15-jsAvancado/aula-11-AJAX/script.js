const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    const photos = JSON.parse(this.responseText)
    const tenPhotos = photos.filter(photo => photo.id <= 10)

    const photosSection = document.querySelector(`.photos`)
    tenPhotos.map(photo => {
      photosSection.innerHTML += `
        <img src="${photo.url}" alt="${photo.title}">
      `
    })




  }
}

xhttp.open(`GET`, `https://jsonplaceholder.typicode.com/photos`, true)
xhttp.send()