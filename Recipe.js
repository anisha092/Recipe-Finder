const KeyApi ='1846dbefe6e04288a4b2a810d0dcf6fe';
const input= document.getElementById('RecipeInput');


const DisplayResults=(id)=>{
    fetch(`https://api.spoonacular.com/recipes/=${id}/information?apiKey=${KeyApi}`)
    .then(response=>{
      const RecipeDetail= document.getElementById('RecipeContainer');
      RecipeDetail.innerHTML=`
      <h3 id="title">${RecipeDetail.title} </h3>
      <img src=" alt="${RecipeDetail.title}"${RecipeDetail.image} ">
      <p> ${RecipeDetail.instructions} </p>
      `;
    })  
    .catch(error=>{
      console.log("Error fetching Api details ",error);
    });
}


const fetchApi=()=>{
  let recipe= input.value;
  fetch(`https://api.spoonacular.com/recipes/search?query=${recipe}apiKey=${KeyApi}`)
  .then(response => response.json())
    .then(data => {
        
    })

}

 