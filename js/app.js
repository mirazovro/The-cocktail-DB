// alert('hello music lover')

const loadData = (search) => {

    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}
    `
    fetch(url)
      .then((res) => res.json())
      .then(data => showDrinks(data.drinks));
}

const showDrinks = (drinks) => {
    // console.log(drinks)
    const drinkContainer = document.getElementById('drink-container')
    drinkContainer.innerHTML = ''
    drinks.forEach(drink => {
        // console.log(drink)
    
    const newDrink = document.createElement('div')
    newDrink.classList.add('col')
    newDrink.innerHTML = `
    
    <div onclick="loadDrinkdetails(${drink.idDrink})" class="card ">
           <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
           <div class="card-body">
           <h3>Catagory: ${drink.strCategory
           }</h3>
            <h5 class="card-title">Drinks name: ${drink.strDrink}</h5>
            <h4>Primary ingredians: ${drink.strIngredient1}</h4>
            <h4> Secondary ingredinats: ${drink.strIngredient3}</h4>
            <h4>Final ingrediatns: ${drink.strIngredient2}</h4>
            <p class="card-text">${drink.strInstructions
            }</p>
            <p>${drink.strInstructionsDE
            }</p>
            
    </div>
    </div>
    
    `; drinkContainer.appendChild(newDrink)})
}

const searchDrinks = () => {
    const searchField = document.getElementById('input-field')
    const searText = searchField.value;
    loadData(searText);
    searchField.value=''
}

const loadDrinkdetails = (idDrink) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displyDrinkdetails(data.drinks[0]));
    
       
    
}

const displyDrinkdetails = (drink) => {
    // console.log(drink)
    const CardDrinkContainer = document.getElementById('card-drink-container')
    CardDrinkContainer.innerHTML = ''
    const drinkDiv = document.createElement('div');
    drinkDiv.classList.add('card')
    drinkDiv.innerHTML = `
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h4>${drink.strDrink}<h4>
                            <p class="card-text">${drink.strInstructions}</p>
                            </div>
    
    `; CardDrinkContainer.appendChild(drinkDiv)
}


loadData('');