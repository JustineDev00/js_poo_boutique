//for now all scripting goes here
// Exercice JS POO Cat Prod
// étape 1 : Stocker les données en localStorage (à l’aide de la classe DataManager) TESTER en DEBUG !
// étape 2 : écrire les classes modèles Category et Product (propriétés et constructeur) TESTER en DEBUG !
//  étape 3 : dans la classe Product ajouter la méthode getCategory()  TESTER en DEBUG !
// étape 4 : dans la classe Category, ajouter la méthode getProductList()  TESTER en DEBUG !
//  étape 5 : réaliser une page présentant la liste des catégories sous forme de tableau TESTER en DEBUG ! 
//  étape 6 : réaliser une page présentant la liste des produits sous forme de tableau TESTER en DEBUG !
// TO DO : étape 7 : réaliser une page d’accueil de boutique qui présente toutes les catégories TESTER en DEBUG !
// TO DO : étape 8 : réaliser une page qui présente les produits correspondant à une catégorie TESTER en DEBUG !

import { DataHelper } from "./helper/datahelper.helper";
import { Category } from "./models/category.model";
import { Product } from "./models/product.model";

let data = new DataHelper(["category", "product"]);
data.initDataStorage();

let catEx1 = new Category({ "id": 6, "title": "adipiscing lorem", "description": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.", "image": "https://picsum.photos/1006/600/400" },);


let ProdEx1 = new Product({ "id": 82, "title": "non", "price": 336.4, "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.", "image": "https://picsum.photos/82/600/400", "category_id": 1 },)


ProdEx1.getCategory();
let catEx1Products = catEx1.getProductList();

let allcats = data.getAll("category");



for (const cat of allcats) {
    const cardTemp = document.querySelector('.card-template').cloneNode(true);
    cardTemp.removeAttribute("hidden");
    cardTemp.classList.remove('card-template');
    cardTemp.querySelector('.card').addEventListener('click', () => {
        window.open('products.html');
        localStorage.setItem("categoryId", JSON.stringify(cat.id));
    });
    const navLinkTemp = document.querySelector('.nav-item-template').cloneNode(true);
    navLinkTemp.removeAttribute("hidden");
    navLinkTemp.classList.remove('.nav-item-template');
    navLinkTemp.querySelector('.nav-link').addEventListener('click', () => {
        localStorage.setItem("categoryId", JSON.stringify(cat.id));
    })
    for (const prop in cat) {
        if (prop == 'title') {
            cardTemp.querySelector('.card-title').innerText = `${cat[prop]}`;
            navLinkTemp.querySelector('.nav-link').innerText = `${cat[prop]}`;
            continue;
        }
        else if (prop == 'description') {
            cardTemp.querySelector('.card-text').innerText = `${cat[prop]}`;
            continue;
        }
        else if (prop == 'image') {
            cardTemp.querySelector('.card-img-top').src = `${cat[prop]}`
            continue;
        }
        else {
            continue;
        }
    }
    document.querySelector(".row").append(cardTemp);
    document.querySelector(".navbar-nav").append(navLinkTemp);
    

}
const navbar = document.querySelector('.navbar').cloneNode(true);



