/*var featureRecipe = new Array();

featureRecipe[0] = "Barbeque";

featureRecipe[1] = "Lime Fiesta Chicken";

featureRecipe[2] = "Japanese Souffle Pancake";


var myRandom = Math.floor(Math.random()*featureRecipe.length);

document.getElementById('featureRecipe').innerHTML= featureRecipe[myRandom];
*/

function Recipe(title,image) {
  this.title = title;
  this.image = image;
}

var recipeTitles = [
  ['Barbeque', 'Chicken'],
  ['Japanese Souffle', 'Pancake'],
  ['Teriyaki', 'Salmon']
];

var recipeImages = [
  "images/deli-1.jpg",
  "images/SoufflePancake.jpg",
  "images/teriyaki-salmon.jpg"
];

var recipes = [];
for (var i = 0; i < recipeTitles.length; i++) {
  var title = recipeTitles[i];
  var image = recipeImages[i];
  var recipe = new Recipe(title,image);
    recipes.push(recipe);
}

console.log(recipes);
var randomIndex = randomInteger(recipes.length);
var recipe = recipes[randomIndex];

document.getElementById('featureRecipe-1').innerHTML = recipe.title[0];
document.getElementById('featureRecipe-2').innerHTML = recipe.title[1];

document.getElementById('imgArray').setAttribute('src', recipe.image);

function randomInteger(x) {
  return Math.floor(Math.random() * x);
}
