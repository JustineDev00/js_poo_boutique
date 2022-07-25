import { DataHelper } from "./helper/datahelper.helper.js";
// import { Category } from "./models/category.model.js";
// import { Product } from "./models/product.model.js";

let data = new DataHelper(["category", "product"]);

let cat_id = localStorage.getItem("categoryId");
cat_id = JSON.parse(cat_id);

let allcats = data.getAll("category");
for (const cat of allcats) {
    const navLinkTemp = document.querySelector('.nav-item-template').cloneNode(true);
    navLinkTemp.removeAttribute("hidden");
    navLinkTemp.classList.remove('.nav-item-template');
    navLinkTemp.querySelector('.nav-link').addEventListener('click', () => {
        localStorage.setItem("categoryId", JSON.stringify(cat.id));
    })
    navLinkTemp.querySelector('.nav-link').innerText = `${cat['title']}`;
    document.querySelector(".navbar-nav").append(navLinkTemp);
}




function DisplayProductList(cat_id) {
    let category = data.getOne("category", cat_id);
    let prodList = category.getProductList();
    for (const product of prodList) {
        const cardTemp = document.querySelector('.card-template').cloneNode(true);
        cardTemp.removeAttribute("hidden");
        cardTemp.classList.remove('card-template')
        cardTemp.querySelector('#addtocart').addEventListener('click', () => {
            let offcanvas = document.querySelector('.offcanvas');
            


        })
        for (const prop in product) {
            if (prop == 'title') {
                cardTemp.querySelector('.card-title').innerText = `${product[prop]}`;
                continue;
            }
            else if (prop == 'description') {
                cardTemp.querySelector('#description').innerText = `${product[prop]}`;
                continue;
            }
            else if (prop == 'price') {
                cardTemp.querySelector('#price').innerText = `${product[prop]}€`;
                continue;
            }
            else if (prop == 'image') {
                cardTemp.querySelector('.card-img-top').src = `${product[prop]}`
                continue;
            }
            else {
                continue;
            }
        }
        document.querySelector(".row").append(cardTemp);
    }

}

DisplayProductList(cat_id);

