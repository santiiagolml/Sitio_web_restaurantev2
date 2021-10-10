let count = 0;
const addToCarButtons = document.querySelectorAll('.addtocar');
addToCarButtons.forEach(addToCarButton => {
    addToCarButton.addEventListener('click', addToCartClicked);
    

});

const shoppingCarItemContainer = document.querySelector('.tableCar');

function addToCartClicked (event){
   const button = event.target;
   const item = button.closest('.item');
   count++;
   const itemtitle = item.querySelector('.item-name').textContent;
   const itemprice = item.querySelector('.item-price').textContent;
   const itemimg = item.querySelector('.item-img').src;
  

   addToCar (itemtitle, itemprice, itemimg );


}

function addToCar(itemtitle, itemprice, itemimg ){
   const elementsTitle = shoppingCarItemContainer.getElementsByClassName('shoppingCartItemTitle');
   for(let i = 0; i < elementsTitle.length; i++){
       if(elementsTitle[i].innerText === itemtitle){
         let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
        elementQuantity.value++;
        $('.toast').toast('show')
        return;
     }
   }
    const shoppingCarRow = document.createElement('div');
    const shoppingCarContent =  `
    <div class="row shoppingCartItem">
    <div class="col-3">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src= ${itemimg} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-2">${itemtitle}</h6>
        </div>
    </div>
    <div class="col-3">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${itemprice} ${itemtitle}</p>
        </div>
    </div>
    <div class="col-2">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;

shoppingCarRow.innerHTML = shoppingCarContent;
shoppingCarItemContainer.append(shoppingCarRow);

shoppingCarRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCarItem);




function removeShoppingCarItem(event){
    const buttonClicked = event.target;
    console.log('rem' , buttonClicked)
    buttonClicked.closest('.shoppingCartItem').remove();

}

}