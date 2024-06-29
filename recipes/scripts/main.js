import recipes from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
	<img src="${recipe.image}" alt="image of food" class='recipe-img'/>
	<figcaption>
        <ul>
		    ${tagsTemplate(recipe.tags)}
	    </ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="rating">
			${ratingTemplate(recipe.rating)}
		</p>
		<p class="description">
			${recipe.description}
		</p>
	</figcaption>
</figure>`;
}

function tagsTemplate(tags) {
  let html = '';
  tags.forEach(tag => {
    html += `<li class='tag'>${tag}</li>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function renderRecipes(recipeList) {
  const section = document.querySelector('.recipes');
  const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('\n');
  section.innerHTML = recipeHTML;
}

function filter(query) {
	const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query.toLowerCase());
    });
	const sorted = filtered.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
		return sorted;
}

function searchHandler(e) {
	e.preventDefault()
	const searchInput = document.getElementById('search-query').value.trim().toLowerCase();
    const filteredRecipes = filter(searchInput);
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
  
    const searchForm = document.getElementById('searchform');
    searchForm.addEventListener('submit', searchHandler)
}
  
init();