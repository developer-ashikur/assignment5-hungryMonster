const foodName = document.getElementById('food-name');


const getFoodItems = () => {
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName.value}`)
    // fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName.value}`)
    .then (res => res.json())
    .then (data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const foodItems = document.getElementById('food-items');
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal-item';
        // mealDiv.addEventListener('click', showDetails(meal.strMeal));
        const displayMeal = `
        <img src="${meal.strMealThumb}" onclick="showDetails('${meal.strMeal}')">
        <h5 onclick="showDetails('${meal.strMeal}')">${meal.strMeal}</h5>
        `;
        mealDiv.innerHTML = displayMeal;
        foodItems.appendChild(mealDiv);
    });
        
}

const showDetails = mealName => {
    fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then (res => res.json())
    .then (data => renderFoodDetails(data.meals[0]))
}


const renderFoodDetails = mealData => {
    const showDetails = document.getElementById('show-details');
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'meal-details';
    const mealDetails = `
    <img src="${mealData.strMealThumb}" class="">
    <h2 class="py-3">${mealData.strMeal}</h2>
    <h5 class="pb-2">Ingredients</h5>
    <ul>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure1 + ' ' + mealData.strIngredient1}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure2 + ' ' + mealData.strIngredient2}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure3 + ' ' + mealData.strIngredient3}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure4 + ' ' + mealData.strIngredient4}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure5 + ' ' + mealData.strIngredient5}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure6 + ' ' + mealData.strIngredient6}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure7 + ' ' + mealData.strIngredient7}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure8 + ' ' + mealData.strIngredient8}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure9 + ' ' + mealData.strIngredient9}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure10 + ' ' + mealData.strIngredient10}</li>
    <li><i class="fas fa-check-square"></i> ${mealData.strMeasure11 + ' ' + mealData.strIngredient11}</li>
    </ul>
    `;
    detailsDiv.innerHTML = mealDetails;
    showDetails.appendChild(detailsDiv);
}