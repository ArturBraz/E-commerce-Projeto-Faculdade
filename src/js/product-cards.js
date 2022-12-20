
function loadCards(products){
    const featuredCard = document.querySelector('.featured-card');
    const manCard = document.querySelector('.man-card');
    const womanCard = document.querySelector('.woman-card')

    products.forEach(obj => {
        const card = generateCard(obj);

        if(obj.category === 'featured'){
            featuredCard.appendChild(card)
        }else if(obj.category === 'man'){
            manCard.appendChild(card)
        }else{
            womanCard.appendChild(card)
        }
    });
}


function generateCard(obj){
    //criação dos elementos html
    
    const productCard = document.createElement('div')

    const productImg = document.createElement('div')

    const viewMore = document.createElement('a')
    const btnView = document.createElement('div')

    const redirectDetails = document.createElement('p')
    const image = document.createElement('img')

    const productName = document.createElement('h1')
    const productInfo = document.createElement('div')

    const productPrice = document.createElement('div')

    const priceValue = document.createElement('h2')
    const portionValue = document.createElement('h3')

    const btnAddCart = document.createElement('div')
    const iconCart = document.createElement('i')

    //aninhando os filhos aos respectivos pais
    productCard.append(productImg,productName,productInfo)
        productImg.append(viewMore,image)
            viewMore.append(btnView)
                btnView.append(redirectDetails)
        
        productInfo.append(productPrice,btnAddCart)
            productPrice.append(priceValue,portionValue)
            btnAddCart.append(iconCart)


    //add classes dos elementos

    productCard.classList.add('product__card')
    productImg.classList.add('product__img')
    viewMore.classList.add('view__more')
    btnView.classList.add('btn-view')

    productName.classList.add('product-name')
    productInfo.classList.add('product__info')
    productPrice.classList.add('price__container')

    priceValue.classList.add('price')
    portionValue.classList.add('portion')

    btnAddCart.classList.add('btn-add-cart')
    iconCart.classList.add('bx bx-cart-add')

    //atribuindo os valores do database para os elementos
    btnAddCart.dataset.id = obj.id

    image.src = obj.img
    productName.innerText = obj.name
    priceValue.innerText = `R$ ${obj.price},00`
    portionValue.innerText = `12x R$ ${obj.portion},00`

    return productCard
}
