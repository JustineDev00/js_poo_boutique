import {DataHelper} from "../helper/datahelper.helper";

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
}
