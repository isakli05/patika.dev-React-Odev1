import getData from './app.js'

await getData(3)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))