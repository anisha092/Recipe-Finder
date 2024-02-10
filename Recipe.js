const KeyApi = '1846dbefe6e04288a4b2a810d0dcf6fe';
let recipeInp = document.getElementById('RecipeInput');

const fetchApi = () => {
  let recipe = recipeInp.value;

  fetch(`https://api.spoonacular.com/recipes/search?query=${recipe}&apiKey=${KeyApi}`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const IdRecipe = data.results[0].id;
        DisplayResults(IdRecipe);
      } else {
        console.log("No Recipe Found");
      }
    })
    .catch(error => {
      console.log('Error fetching:', error);
    });
}

const DisplayResults = (id) => {
  fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${KeyApi}`)
    .then(response => response.json())
    .then(RecipeDetail => {
      const RecipeData = document.getElementById('RecipeContainer');
      RecipeData.innerHTML = `
        <h3 id="title">${RecipeDetail.title} </h3>
        <img src="${RecipeDetail.image}" alt="${RecipeDetail.title}">
        <p>${RecipeDetail.instructions}</p>
      `;
    })
    .catch(error => {
      console.log("Error fetching recipe details", error);
    });
}




















