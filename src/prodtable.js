import { DataHelper } from "./helper/datahelper.helper.js";
// import { Category } from "./models/category.model";
// import { Product } from "./models/product.model";


let data = new DataHelper(["category", "product"]);
const rows2 = data.getAll("product")

for (const row of rows2){
    const rowTemplate = document.querySelector('.row-template').cloneNode(true);
    rowTemplate.removeAttribute("hidden");
    rowTemplate.classList.remove('row-template');
    for (const prop in row){
        if (typeof row[prop] == 'function'){
            continue;
        }
        if (prop == 'image'){
            let img = document.createElement("img");
            img.src = `${row[prop]}`;
            rowTemplate.querySelector('.image').append(img);
            continue;
        }
        rowTemplate.querySelector(`.${prop}`).innerText = row[prop];
    }
    const tableBody = document.querySelector('tbody');
    tableBody.append(rowTemplate);
}

let bp = true;