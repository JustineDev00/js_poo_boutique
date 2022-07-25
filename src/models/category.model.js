import {DataHelper} from "../helper/datahelper.helper.js";

export class Category{
    id = -1;
    title = "";
    description = "";
    image = "url";

    constructor(props){
        Object.assign(this, props);
    };


    getProductList(){
        let productList = [];
        let datahelper = new DataHelper(["category", "product"]);
        let allProducts = datahelper.getAll("product");
        productList =  allProducts.filter(item => item.category_id == this.id);
        return productList;

    };

    setProp(key, value){ //key : nom de la propriété de l'objet; value : valeur que l'on va assigner à la propriété key
        this[key] = value; //key est variable, il est donc mis en crochet (comme l'index d'un array)
    }
}
