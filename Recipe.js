
const ApiKey ='1846dbefe6e04288a4b2a810d0dcf6fe';

fetch(`https://api.spoonacular.com/recipes/random?apiKey=${ApiKey}`)
.then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching')});