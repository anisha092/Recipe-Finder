const KeyApi = '1846dbefe6e04288a4b2a810d0dcf6fe';

const fetchApi = (event) => {
    event.preventDefault();

    let recipeInp = document.getElementById('RecipeInput');
    let recipeContainer = document.getElementById('RecipeContainer');

    let recipe = recipeInp.value;

    fetch(`https://api.spoonacular.com/recipes/search?query=${recipe}&apiKey=${KeyApi}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const relatedRecipes = data.results.slice(1, 8);
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
  const relatedRecipeContainer = document.getElementById('RecipeContainer');
  relatedRecipeContainer.innerHTML = `
      <h3>Related Recipes</h3>
      <div class="row">
          ${recipes.map(recipe => `
              <div class="col-md-4 mb-4">
                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">${recipe.title}</h5>
                          <button class="main-btn" onclick="displayRecipeDetails(${recipe.id})">View Recipe</button>
                      </div>
                  </div>
              </div>
          `).join('')}
      </div>
  `;
}

const displayRecipeDetails = (id) => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${KeyApi}`)
        .then(response => response.json())
        .then(recipe => {
            const modalContent = document.getElementById('modalContent');
            const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
  
            if (modalContent) {
                modalContent.innerHTML = `
                    <div class="text-center">
                      <h2 id="titleApi" class="modal-title text-left">${recipe.title}</h2>
                      <img src="${recipe.image}" alt="${recipe.title}" class="img-fluid rounded mx-auto d-block" id="ImgApi">
                    </div>
                    <div class="mt-3">
                      <p class="card-text text-center">Ready in ${recipe.readyInMinutes} minutes </p>
                      <h4 class="text-center">Instructions for Recipe</h4>
                      <p class="modal-text text-left">${recipe.instructions}</p>
                    </div>
                `;
  
                modal.show();
            } else {
                console.error("Modal content Error ");
            }
        })
        .catch(error => {
            console.error("Error fetching recipe details", error);
        });
  }
  

const closeModal = () => {
  const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
  modal.hide();
}







