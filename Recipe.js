const KeyApi = '1846dbefe6e04288a4b2a810d0dcf6fe';


const fetchApi = (event) =>
 {
  event.preventDefault();
  let recipeInp = document.getElementById('RecipeInput');
  let RecipeContainer=getElementById("RecipeContainer");
  let recipe=recipeInp.value;

  fetch(`https://api.spoonacular.com/recipes/search?query=${recipe}&apiKey=${KeyApi}`)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        const relatedRecipes=data.results.slice(1,7);
        displayRelatedRecipes(relatedRecipes);
      } else {
        console.log("No Recipe Found");
      }
    })
    .catch(error => {
      console.log('Error fetching:', error);
    });
}

const displayRelatedRecipes = (recipes) => {
      const relatedRecipesContainer = document.getElementById('RecipeContainer');
      relatedRecipesContainer.innerHTML = `
      <h3>Related Recipes <h3/>
      <div class="row">
      ${recipes.map(recipe=>`
         <div class=""col-md-4 mb-4> 
         <div class="card"><div/>
         <div class="card-body">
         <h5 class="card-title">${recipe.title}</h5>
         <button class="btn btn-primary" onclick="displayRecipeDetails(${recipe.id})">View Recipe</button>
     </div>
         <div/>
      `).join('')}
      <div/>
      `;
    }

    const displayRecipeDetails=(id)=>{
      fetch`https://api.spoonacular.com/recipes/=${id}/information?apiKey=${KeyApi}`
      .then(response=>response.json())
      .then(recipe=>{
        const RecipeData=document.getElementById(RecipeContainer);
        RecipeData.innerHTML=`
         <h3 id="titleApi"> ${recipe.title}<h3/>
         <img src="${recipe.image}" alt="${recipe.title}" class="ImgApi"></img>
         <div class="ApiData">
         <p class="card-text"> <p/>
         <h4>Instructions for Recipe <h4/>
         <p>${recipe.instructions}<p/>

         <div/>
        `
      })
      .catch(error=>{
        console.log("Error fetching recipe Details", error);
      })
    }
    











