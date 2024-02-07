const KeyApi ='1846dbefe6e04288a4b2a810d0dcf6fe';

fetch(`https://api.spoonacular.com/recipes/random?apiKey=${KeyApi}`)
.then(response => response.json())
  .then(data => {
    console.log(data);
  })
 