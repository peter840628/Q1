

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res => res.json())
    .then(json => console.log(json));